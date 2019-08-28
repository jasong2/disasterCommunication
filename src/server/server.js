const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001'))



  app.post('/signup', (req, res) => {

    console.log(req.body)
    
  });