const FuncionarioModel = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define("Funcionarios", {
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING,
    orgao: DataTypes.STRING,
    salario: DataTypes.STRING
  });
  return Funcionarios;
};

module.exports = FuncionarioModel;
