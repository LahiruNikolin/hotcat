const express = require('express')
const app = express();
const cors = require('cors')
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionstorage = require('sessionstorage');

app.use(cors());


let array=[];

app.get('/', (req, res) => {
  res.send(JSON.stringify(sessionstorage.getItem('items')));
});

app.get('/delete', (req, res) => {

   array=array.filter((item)=>{
       if(item.code !==req.query.id){
           return item;
       }

   });
   
  sessionstorage.clear()
  sessionstorage.setItem('items',array);
   res.send("Good");
  });

app.post('/save', (req, res) => {

   // console.log(req.body);

  // sessionstorage.setItem(req.body.code, req.body);
  if(sessionstorage.getItem('items')){

    array=sessionstorage.getItem('items');

  }
 
  array.push(req.body)

  sessionstorage.clear()
  sessionstorage.setItem('items',array);
  
  res.send('Hello World!'+array.length);
  console.log(array.length)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});