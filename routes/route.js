const express = require('express');
const route = express.Router();

const controller = require('../controllers/controller');

route.get("/", controller.home);

// route.get("/queryString", (req,res) => {
//     res.send(req.query);
//     res.send(req.query.campanha);   //Campanha foi passado na URL: ..../?campanha=Natal_2022
// });

route.post("/", controller.form);


// route.get("/params/:produto", (req,res) => {
//     res.send(req.params.produto);
// });

module.exports = route;