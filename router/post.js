const express = require('express');

const app = express.Router();

app.post('/caes', async(request, response)=>{
    //OBTEM OS DADOS ENVIADOS PELO USUÁRIO
    const content = await request.body;

    //IMPORTA A CONEXÃO COM O BANCO DE DADOS E A TABELA
    const db = require('../DATABASE/connection');
    const table = require('../DATABASE/table');

    //VERIFICA SE A TABELA EXISTE NO BANCO DE DADOS
    await db.sync()
    .then(()=>{
        //INSERE OS DADOS ENVIADOS PELO USUÁRIO
        table.create(content);

        //RETORNA A MENSAGEM DE SUCESSO
        return response.json({mensagem: "Sucesso!!!"});
    })
    .catch(()=>{
        //CASO OCORRA UM ERRO DURANTE A INSERÇÃO DOS DADOS NO BANCO DE DADOS
        return response.json({mensagem: "Não foi possível cadastrar!!!"});
    })    
});

//PERMITE COM QUE POSSA SER IMPORTADOS EM OUTROS SCRIPTS
module.exports = app;