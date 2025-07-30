const express = require('express');

const server = express();

server.get('/', (req, res)=>{
    console.log(req.url);
})

server.listen(3000, ()=>{
    console.log('listening');
})