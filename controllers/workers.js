const model = require('../models/index')
const sequelize = model.sequelize

const getAll = async ({ Worker }, req, res) => {
  await sequelize
    .query(
      "select count(*) as 'acumulos', nome, cargo from funcionariodomes.funcionario group by nome, cargo order by acumulos desc"
    )
    .spread((results, metadata) => {
      res.render("workers", {
        funcionarios: metadata,
        msg: ""
      });
    });
};

const getByName = async ({ Worker }, req, res) => {
  await sequelize
    .query(
      `select nome from funcionariodomes.funcionario where nome like '% ${req.query.name} %'`
    )
    .spread((results, metadata) => {
      if (results.length >= 1) {
        res.render('workers', {
          funcionarios: metadata,
          msg: ''
        });
      } else {
        res.render('workers', { msg: 'Nenhum resultado encontrado.', funcionarios: metadata });
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
