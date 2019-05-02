const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const Pet = require('./Schemas/Pet');

const app = express();
const port = process.env.PORT || 5000;

let newPets = [
  //Crear nuevas mascotas aquí y descomentar insertMany en get('/') para insertarlos a la db
  {
    id: 1,
    name: 'Bruno',
    image:
      'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    species: 'Perro',
    breed: 'Chihuahua',
    description: 'Recién nacido'
  },
  {
    id: 2,
    name: 'Luna',
    image:
      'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    species: 'Perro',
    breed: 'Husky',
    description: 'Recién nacido'
  },
  {
    id: 3,
    name: 'Nina',
    image:
      'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    species: 'Gato',
    breed: 'N/A',
    description: '3 meses'
  },
  {
    id: 4,
    name: 'Stan & Lee',
    image:
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    species: 'Perro',
    breed: 'Labrador',
    description: '3 meses'
  },
  {
    id: 5,
    name: 'Pepe',
    image:
      'https://images.pexels.com/photos/1485637/pexels-photo-1485637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    species: 'Perro',
    breed: 'Labrador',
    description: '3 meses'
  }
];

mongoose.connect(
  'mongodb://admin:admin123@ds019966.mlab.com:19966/pet-store',
  {
    useNewUrlParser: true
  },
  async () => {
    mongoose.connection.db.dropDatabase();
    try {
      await Pet.deleteMany({}, (err) => console.log('deleted pets'));
      await Pet.insertMany(newPets, (err) => console.log('added pets'));
    } catch (err) {
      if (err) {
        throw err;
      }
    }
  }
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', async (req, res) => {
  try {
    await Pet.deleteMany({}, (err) => console.log('deleted pets'));
    await Pet.insertMany(newPets, (err) => console.log('added pets'));
  } catch (err) {
    if (err) {
      throw err;
    }
  }
  res.send('go to /api/pets to see all pets');
});

//Get all pets
app.get('/api/pets', (req, res) => {
  Pet.find({})
    .lean()
    .exec((err, pets) => {
      if (err) {
        throw err;
      }
      res.json(pets);
    });
});

//Adopt a pet by it's id, deletes it from the db and returns remaining pets
app.get('/api/pets/adopt/:id', (req, res) => {
  Pet.deleteOne({ id: parseInt(req.params.id) })
    .lean()
    .exec((err, pet) => {
      if (err) {
        throw err;
      }
    });
  Pet.find({})
    .lean()
    .exec((err, pets) => {
      if (err) {
        throw err;
      }
      res.json(pets);
    });
});

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
