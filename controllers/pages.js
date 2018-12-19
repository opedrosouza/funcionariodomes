const model = require("../models/index");
const sequelize = model.sequelize;

const index = async(req, res) => {
  await sequelize
    .query("select nome, count(*) as 'acumulo', concat('R$ ',round(sum(salario) * 12, 2)) as 'salarioAnual' from funcionariodomes.funcionario group by nome order by acumulo desc limit 10")
    .spread((results, metadata) => {
      res.render("index", {
        funcionarios: metadata,
        msg: ""
      });
    });
};

const about = (req, res) => {
  res.render('about');
};

module.exports = {
  index, about
};