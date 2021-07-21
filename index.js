const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("Olá, Fábrica de Sinapse e Paulo Salvatore!");
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});
