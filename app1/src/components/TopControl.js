import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MainBody from './MainBody';
import ModalComp from './ModalComp';
import React, { useState,useEffect } from 'react';
 
import './css/TopCont.css';


const TopControl = ()=>{

    const [items,setItems]=useState([]);
    const[code,setCode]=useState('');
    const[name,setName]=useState('');
    const[type,setType]=useState('');
    const[price,setPrice]=useState('');

    const[searchMode,setSearchMode]=useState(false);

    let tempItems=[];
    let deleteIds=[];

    useEffect(()=>{

        fetch('http://localhost:8000/')
        .then(response => response.json())
        .then(data => {
            if(data){

                setItems(data)

            }
        }
      );
            },[]);

    const AddItem = (e) => {
        //setOpen(true);]
        e.preventDefault();
      
      //  console.log("im game");

        fetch('http://localhost:8000/save',{
            method:'POST',
            body:JSON.stringify({code,name,type,price}),
            headers:{
                'Content-type':'application/json'
            }
        })
        
 
        setItems(prevState =>{
            return [...prevState,{code,name,type,price}];
        }

             
        );
      };

      const DeleteHandler =(id)=>{

        deleteIds.push(id);
      
      }

      const DeleteProceed=()=>{

        

        let tempArray=items;

        deleteIds.forEach((id)=>{

            fetch('http://localhost:8000/delete?id='+id);
            

            tempArray=tempArray.filter((item)=>{
                if(item.code !== id){
                    return item;
                }
            });
        }
        );

        
        setItems(tempArray);
      }

      const Search=(e)=>{

        setSearchMode((prevState)=>{

            return !prevState;
        });

        tempItems= items.filter(it => {

                    if(it.code.includes(e.target.value)){
                        return it;
                    }
                
                });
        
      }
    

   

    return (
        <>
            <div className='hero-cont'>
                <div className='hero-sub-cont'>
                    <div className='inp-cont'>
                        <div className='inp'>
                            <input type='text' placeholder='search' onChange={Search}></input>
                            <SearchIcon className='ic-ser'></SearchIcon>

                        </div>
                        <div className='cust-btn'>
                            <Button color="secondary" variant="contained" onClick={DeleteProceed}>Delete</Button>
                        </div>
                    </div> 
                    <div className='add-btn'>
                        <div>
                            
                            <ModalComp ModalAdd={AddItem} 
                                setCode={setCode} 
                                setName={setName}
                                setType={setType}
                                setPrice={setPrice}
                               
                                
                                >
                                <span >Add</span>
                            </ModalComp>
                        </div>
                       
                    </div>
                    
                    
                   
                </div>
                <MainBody items={searchMode ? tempItems: items}
                 Delete={DeleteHandler}
                ></MainBody>
               
                
            </div>
           


           
        </>
    )

}

export default TopControl;