const Sequelize = require("sequelize");
const sequelize = new Sequelize("funcionariodomes", "pedro", "@FuncDB18/10@", {
  host: "159.89.137.35",
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

const worker = sequelize.import("./worker.js");

module.exports = {
  sequelize,
  models
};
