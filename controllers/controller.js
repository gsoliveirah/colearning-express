const controller = {
    home: (req,res) => {
        res.render('index');
    },
    form: (req,res) => {
        console.log(req.body);
        //res.send(req.body);
        res.send(req.body.nome);
    }
}

module.exports = controller;