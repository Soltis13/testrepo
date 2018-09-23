//---------
//Initialize
//---------

  //Initialize Library Dependancies
  const express = require('express'); 
  const mongoose = require('mongoose');

  //Initialize route Dependancies
  const users = require('./routes/api/users')
  const profile = require('./routes/api/profile')
  const posts = require('./routes/api/posts')

  //Start app from express
  const app = express();

//----------
//Database
//----------

  // DB Config
  const db = require('./config/keys').mongoURI;

  // Connect to MongoDB
  mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


//-----------
//Routes
//-----------
  //Get route
  app.get('/', () => res.send("Hello"));

  //Use routes
  app.use('/api/users', users);
  app.use('/api/profile', profile);
  app.use('/api/posts', posts);


//----------
//Data out
//----------

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server running on port ${port}`))