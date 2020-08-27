'use strict';

// make a variable called express to use the express library
const express = require('express');

// initialize the express
// server has lot of properties and methods
const server = express();

// declare a PORT to connect your website with the server
const PORT = process.env.PORT || 3000;

// to access files and folders inside public
server.use(express.static('./public'));


server.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`);
});