require("dotenv").config();
//dotenv é uma biblioteca
//a função config() permite que possamos exportar o conteúdo do arquivo .env para outros arquivos

const app = require("./src/app");
//const port = 3000;
const port = process.env.PORT || 3000;
// caso o PORT seja informado o mesmo será utilizado, senão consideramos o valor padrão 3000

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
});