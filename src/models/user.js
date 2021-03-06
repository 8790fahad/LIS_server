export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    accessTo: DataTypes.STRING,
    position: DataTypes.STRING,
    department: DataTypes.STRING,
    accessToDept: DataTypes.STRING,
  });

  User.associate = function (models) {
    // associations go here
  };

  return User;
};
