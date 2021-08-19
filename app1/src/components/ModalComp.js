import React from 'react';
import { Button } from '@material-ui/core';
import './css/modalStyle.css';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
  }));

const ModalComp = (props)=>{
    
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
          <form>
          
          <div className="inp-holder">
              <div className='cancel-ic'><CancelIcon onClick={handleClose} ></CancelIcon> </div>
              <div className="each-inp" style={{paddingTop:'15px'}}>
                  <div>Item Code</div>
                  <div><input type='text' name='code' onChange={(e)=>{props.setCode(e.target.value)}}></input></div>
              </div>
              <div className="each-inp">
                  <div>Name</div>
                  <div><input type='text' name='name' onChange={(e)=>{props.setName(e.target.value)}}></input></div>
              </div>
              <div className="each-inp">
                  <div>Type</div>
                  <div><select name="cars" id="cars" onChange={(e)=>props.setType(e.target.value)}>
                            <option value="Biscuit">Biscuit</option>
                            <option value="Coke">Coke</option>
                            <option value="Towel">Towel</option>
                            
                        </select>
                    </div>
              </div>
              <div className="each-inp">
                  <div>Price</div>
                  <div><input type='number' name='price' onChange={(e)=>{props.setPrice(e.target.value)}}></input></div>
              </div>
          </div>

           
          <Button variant="contained" color="primary"  onClick={props.ModalAdd} size="small" >
            Add
          </Button>

         
        
          </form>
      </div>
    );
  
    return (
      <div>
       <Button color="primary" variant="contained"  size="medium" onClick={handleOpen}>
          {props.children}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
           
          {body}
        </Modal>
      </div>
    );

}

export default ModalComp;