import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import express from 'express';

//const bodyParser = require('body-parser');
//const express = require('express');

//const eventRoutes = require('./routes/events');
//const authRoutes = require('./routes/auth');

//const app = express();

////////
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
////////////

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

//app.use(authRoutes);
//app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
  
});

///////////////////
app.get('/meals', async (req, res) => {
  try {
    const meals = await fs.readFile('./data/available-meals.json', 'utf8');
    res.json(JSON.parse(meals));
  } catch (err) {
    res.status(500).json({ message: 'Failed to read meals.' });
  }
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  res.status(404).json({ message: 'Not found' });
});

/////////////////

//app.listen(8080);
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
