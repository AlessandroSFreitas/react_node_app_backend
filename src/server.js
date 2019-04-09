const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-sm9eb.mongodb.net/reactnodeapp?retryWrites=true', {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
