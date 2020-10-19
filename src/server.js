// import plugins/libs

const express = require('express');
const path = require('path');
const pages = require ('./pages.js');
// start express
const server = express()
server
//body req
    .use(express.urlencoded({extended: true}))
    .use(express.static('public'))
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// start server
server.listen(5500);