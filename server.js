const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const port = config.get('port') ?? 4000;

app.use(express.json());
app.use(morgan('dev'))
app.use(cors({ origin: config.get('original_url') }));

app.use('/api/links', require('./routes/links'));
app.use('/api/auth', require('./routes/auth'));
app.use('/t', require('./routes/redirect'));

const start = async () => {
  try {
    await mongoose.connect(config.get('db_uri'));
    console.log('Database connected...');

    app.listen(port, () => console.log(`Server started on port: ${port}`))
  } catch (e) {
    console.log(e)
  }
}

start()