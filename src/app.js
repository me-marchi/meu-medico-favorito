const express = require ("express");
const app = express();
//require("../models/Doctors");
const doctors = require("./routes/doctors");
const index = require("./routes/index");

app.use(express.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin, X-Request-With, Content-Type, Accept");
    next();
});
//O asterico significa "tudo"
//Os "Access-Control-Allow-Origin" significam que a aplicação pode receber dados de qualquer origem, de modo a não haver problemas com o front
//O next indica que ele ele pode seguir fora da função, impedindo que a aplicação fique travada nestas configurações header
// para que o front consiga utilizar as rotas que vamos criar precisamos dar essa permissão de acesso

app.use("/", index);

app.use("/doctors", doctors);

//app.options("/*", (req, res) => {
//    res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers");
//    res.header("Access-Control-Allow-Methods", "PUT, POT, DELETE, OPTIONS, PATCH");
//    res.send("manda qualquer coisa aí");
//});

module.exports = app;
