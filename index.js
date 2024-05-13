const http = require('http');
const express = require('express');
const path = require('path');

 
const app = express();
 

const server = http.createServer(app);
 

server.listen(9000, () => {
    console.log(`Server connected on PORT 9000`);
});
