const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
