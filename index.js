const express = require('express');

const GET  = require('./router/get');
const POST = require('./router/post');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', GET);
app.use('/', POST);

app.listen(3010, ()=>{
    console.log('Servidor rodando em localhost:/3010/');
})