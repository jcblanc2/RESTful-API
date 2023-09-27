const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

app.use(express.json());

// import postRoutes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);


app.get('/', (req, res) => {
    res.send("Test root");
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => console.log("Connected to DB!"));

app.listen(
    process.env.PORT,
    () => console.log(`It's alive on http://localhost:${process.env.PORT}`)
);