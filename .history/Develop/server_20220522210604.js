
const express = require('express');

const app = express();


const { db } = require('./data/animals');


app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});

app.get('/banaa', (req,res ) => {
 res.send('Hi')
} )