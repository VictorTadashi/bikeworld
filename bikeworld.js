const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/bikeworld", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UsuarioSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String}
  });
  
  const Usuario = mongoose.model("Usuario", UsuarioSchema);
  
  const produtobicicleta = new mongoose.Schema({
    id_produtobicicleta: {type: Number, required: true},
    descrição: {type: String},
    marca: {type: String},
    datafabricacao: {type: Date},
    quantidadeestoque: {type: Number}
  });

  const Produtobicicleta = mongoose.model("Produtobicicleta", UsuarioSchema);

  app.post("/cadastrousuario", async (req, res) => {
    const usuario = req.body.usuario;
    const produtobicicleta = req.body.req.body.usuario

    const cadastrousuario = new Usuario({
        Usuario: usuario,
        produtobicicleta: produtobicicleta,
      });
      try {
        const newUsuario = await usuario.save();
        res.json({ error: null, msg: "Cadastro ok", UsuarioId: newUsuario._id });
      } catch (error) {}
    });

  app.post("/cadastroprodutobicicleta", async (req, res) => {
    const id_produtobicicleta = req.body.id_produtobicicleta;
    const descrição = req.body.descrição;
    const marca = req.body.marca;
    const datafabricacao = req.body.datafabricacao;
    const quantidadeestoque = req.body.quantidadeestoque;

    const produtobicicleta = new produtobicicleta({
        id_produtobicicleta: id_produtobicicleta,
        descrição: descrição,
        marca: marca,
        datafabricacao: datafabricacao,
        quantidadeestoque: quantidadeestoque
      });  
      try {
    const newUsuario = await usuario.save();
    res.json({ error: null, msg: "Cadastro ok", UsuarioId: newUsuario._id });
  } catch (error) {}
  })

  app.get("/cadastrousuario", async (req, res) => {
    res.sendFile(__dirname + "/cadastrousuario.html");
  });
  
  app.get("/cadastroprodutobicicleta", async (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });