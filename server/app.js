const express = require('express');
const path = require('path');
const banksRouter = require('./routers/banksRoutes');
const terminalsRouter = require('./routers/terminalsRoutes')

const app = express();

const CLIENT_BUILD_PATH = path.join(__dirname, '../client/build');

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get('/', function (req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.use('/api/v1/banks', banksRouter);
app.use('/api/v1/terminals' , terminalsRouter)

module.exports = app;
