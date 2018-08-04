const express = require('express');
const app = express();
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.get('/', (req, res) => res.send('Hello THEREEE!!'));

//DB config
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected'))
.catch( err => console.log(err));





const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`port ${port}`));
