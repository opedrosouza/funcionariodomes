const model = require('../models/index')
const sequelize = model.sequelize

const getAll = async ({ Worker }, req, res) => {
  // "select count(*) as 'acumulos', nome, cargo from funcionariodomes.funcionario group by nome, cargo order by acumulos desc"
  await sequelize
  .query(
    "select nome, count(*) as 'acumulo', concat('R$ ',round(sum(salario) * 12, 2)) as 'salarioAnual' from funcionariodomes.funcionario group by nome order by acumulo desc limit 10, 10"
    )
    .spread((results, metadata) => {
      res.render("workers", {
        funcionarios: metadata,
        msg: ""
      });
    });
};
//select nome from funcionariodomes.funcionario where nome like '% ${req.query.name} %'
const getByName = async ({ Worker }, req, res) => {
  await sequelize
    .query(`SELECT nome, cargo, COUNT(*) AS 'acumulo', concat('R$ ',round(sum(salario) * 12, 2)) as 'estimativa de gasto anual'
from funcionariodomes.funcionario where nome like '%${req.query.name}%' group by nome, cargo order by acumulo desc`)
    .spread((results, metadata) => {
      if (results.length >= 1) {
        res.render("workers", { funcionarios: metadata, msg: "" });
      } else {
        res.render("workers", {
          msg: "Nenhum resultado encontrado.",
          funcionarios: metadata
        });
      }
    });

  // if (results.length >= 1) {
  //   res.render('workers', {
  //     funcionarios: metadata,
  //     msg: ''
  //   });
  // } else {
  //   res.render('workers', { msg: 'Nenhum resultado encontrado.', funcionarios: metadata });
  // }
};

module.exports = {
  getAll,
  getByName
};
