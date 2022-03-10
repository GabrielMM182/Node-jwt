const usuariosControlador = require("./usuarios-controlador");
const middwaresAutenticacao = require("./middwares-autenticacao");

module.exports = (app) => {
  app
    .route("/usuario/login")
    .post(middwaresAutenticacao.local, usuariosControlador.login);

  app
    .route("/usuario/logout")
    .get(middwaresAutenticacao.bearer, usuariosControlador.logout);

  app
    .route("/usuario")
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app
    .route("/usuario/:id")
    .delete(middwaresAutenticacao.bearer, usuariosControlador.deleta);
};
