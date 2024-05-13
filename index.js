const http = require('http');
const express = require('express');
const path = require('path');


const app = express();
app.use('/api/users', require('./routes/userRoutes'));

const server = http.createServer(app);

server.listen(9000, () => {
    console.log(`Server connected on PORT 9000`);
});
