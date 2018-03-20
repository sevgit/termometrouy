import express from 'express';

import bodyParser from 'body-parser'



const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const name= req.body.name;
  console.log(name)
  res.json({"name": `hola ${req.query.name}`})
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})