import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  });

  function createData(code, name, type, price) {
    return { code, name, type, price };
  }




const MainBody = (props)=>{

    const rows = [
        
      ];

  //  console.log(props.items);

    props.items.forEach((item)=>{

        rows.push(createData(item.code, item.name, item.type, item.price));


    });

    const Deletion=(id)=>{

        props.Delete(id);

    }



   

    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Item Code</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Price</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.code} onClick={(e)=>{
               
                let tds= e.target.parentNode.children;
                for (let item of tds) {
                  item.style.backgroundColor='grey';
                }

                Deletion(e.target.parentNode.children[0].innerHTML);
                
                }}>
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </>
        
    )

}

export default MainBody;