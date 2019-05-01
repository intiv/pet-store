const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/customers', (req, res) => {
  const gente = [
    {
      id: 1,
      firstName: 'Inti',
      secondName: 'Velásquez'
    },
    {
      id: 2,
      firstName: 'Juany',
      secondName: 'Ramirez'
    },
    {
      id: 3,
      firstName: 'Walther',
      secondName: 'Carrasco'
    }
  ]
  res.json(gente);
});

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port, cors(), (req, res) => {
    console.log(`App listening on port ${port}`);
});

