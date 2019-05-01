const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const Pet = require('./Schemas/Pet');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://admin:admin123@ds019966.mlab.com:19966/pet-store', {useNewUrlParser: true});

let newPets = [
  //Crear nuevas mascotas aquí y descomentar insertMany en get('/') para insertarlos a la db
]

app.get('/', (req, res) => {
  /*Pet.insertMany(pets, (err, docs) => {
    if(err){
      throw err;
    }
  })*/
  res.send('go to /api/pets to see all pets');
});

//Get all pets
app.get('/api/pets', (req, res) => {
  Pet.find({}).lean().exec((err, pets) =>{
    if(err){
      throw err;
    }
    res.json(pets);
  }); 
});

//Adopt a pet by it's id, deletes it from the db and returns remaining pets
app.get('/api/pets/adopt/:id', (req, res) => {
  Pet.deleteOne({id: parseInt(req.params.id)}).lean().exec((err, pet) => {
    if(err){
      throw err;
    }
  });
  Pet.find({}).lean().exec((err, pets) =>{
    if(err){
      throw err;
    }
    res.json(pets);
  });
})

if (process.env.NODE_ENV === 'production') {

  //Serve up production assets
  app.use(express.static('client/build'));

  //Serve index.html if route not recognized
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, (req, res) => {
    console.log(`App listening on port ${port}`);
});

