const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("Maquina");
});

app.post("/compra", function(req,res){
    const botton = req.body;
    let Codigo=botton.Codigo;
    let Credito=botton.Credito;
    const mysqlFile = require('./mysql');
    mysqlFile.consultaProducto(Codigo);
    
});

app.listen(3000, function(){
    console.log("Servidor creado http://localhost:3000");
});