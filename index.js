const express = require('express');
    const categoriaController = require('./controller/CategoriaController');
        const app = express();

            app.use(express.json());
                app.use(express.urlencoded({extended:true}));

                    /* ROTAS DE CATEGORIA DE LIVROS: */
                    // console.log('A REQUISIÇÃO PASSOU PELA INDEX');
                    app.use('/', categoriaController);

app.listen(4200, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:4200');
});