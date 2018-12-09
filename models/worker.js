const WorkerModel = (sequelize, DataTypes) => {
  const Worker = sequelize.define("Worker", {
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING,
    orgao: DataTypes.STRING,
    salario: DataTypes.STRING
  });
  return Worker;
};

module.exports = WorkerModel;
