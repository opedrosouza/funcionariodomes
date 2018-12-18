const Sequelize = require("sequelize");
const sequelize = new Sequelize("funcionariodomes", "root", "@FuncionarioDB18/10@", {
  host: "localhost",
  dialect: "mysql"
});

const models = {};
const path = require("path");
const fs = require("fs");
fs.readdirSync(__dirname)
  .filter(file => file !== "index.js")
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

module.exports = {
  sequelize,
  models
};
