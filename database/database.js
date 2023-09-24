const Sequelize = require('sequelize');

    const connection = new Sequelize(

        {

        }
    );

    // NO MYSQL EXECUTAR OS SEGUINTES COMANDO PARA CRIAR O BANCO
    // CREATE DATABASE api_anime_bd;
    // USE api_anime_bd

module.exports = connection;