//importação das dependências da aplicação
const express = require('express');
const app = express();
const path = require('path');

const route = require('./routes/route');

//Prepara a recepção dos dados que virão via POST do form
app.use(express.urlencoded({extended: true}));
app.use(route);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//CRUD - Create - Read - Update - Delete
//       POST   - GET  - PUT    - Delete  
//Base URL - http://www.meusite.com.br - params - query - body

//criando a porta de acesso da aplicação
app.listen(3003, () => {
    console.log("o pai tá ON!");
    console.log("o app está rodando na http://localhost:3003");
});


// app.get("/", (req,res) =>{
//     res.send('<form action="/" method="POST">Nome: <input type="text" name="nome"><button>Enviar</button></form>');
// });

// app.get("/queryString", (req,res) => {
//     res.send(req.query);
//     res.send(req.query.campanha);   //Campanha foi passado na URL: ..../?campanha=Natal_2022
// });

// app.post("/", function(req,res) {
//     console.log(req.body);
//     //res.send(req.body);
//     res.send(req.body.nome);
// })

// app.get("/params/:produto", (req,res) => {
//     res.send(req.params.produto);
// });