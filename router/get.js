const express = require('express');

const app = express.Router();

app.get('/caes', async(request, response)=>{
    //PEGANDO O PARÁMETRO DIGITADO PELO USUÁRIO
    const {pag=1} = request.query;

    //IMPORTANDO OS SCRIPTS COM A CONEXÃO COM O BANCO DE DADOS E A TABELA
    const db    = require('../DATABASE/connection');
    const table = require('../DATABASE/table');

    //VERIFICANDO SE A TABELA EXISTE NO BANCO DE DADOS CASO CONTRARIO CRIA A TABELA
    db.sync()
    .then(()=>{

        //CONTA QUANTOS REGISTOS TEM NO BANCO DE DADOS
        table.count()
        .then((resultados)=>{

            //NÚMERO MÁXIMO DE REGISTOS QUE SERÃO APRESENTADOS POR PÁGINA
            const limit = 10;

            //CALCULANDO O NÚMERO DE PÁGINAS
            const all_pages = Math.ceil(resultados/limit);

            //VERIFICA SE O PARÁMETRO DIGITADO PELO USUÁRIO É MAIOR QUE O NÚMERO DE PÁGINAS
            if(pag > all_pages || pag <= 0)
            {
                return response.json({mensagem: "Nenhum dados disponível aqui!!!"})
            }

            //SE O PARÁMETRO DIGITADO FOR MENOR OU IGUAL QUE QUE O NÚMERO DE PÁGINA
            table.findAll({
                //COLUNAS QUE SERÃO APRESENTADAS
                attributes: ['id', 'nome', 'imagem'],

                //LIMITE DE REGISTSO QUE SERÃO APRESENTADOS
                limit: [((limit*pag)-limit), limit]
            })
            .then((Caes)=>{
                //LISTA OS REGISTOS
                return response.json({Caes, resultados, paginas: pag +'/'+all_pages})
            })
        })
    })
});

//PERMITE QUE ESTE SCRIPT POSSA SER IMPORTADO EM OUTROS SCRIPTS
module.exports = app;