const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  err => {
    if (err) throw err;
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }
);

app.use(express.json());
app.use(cors());
app.use('/users', require('./routes/user'));
