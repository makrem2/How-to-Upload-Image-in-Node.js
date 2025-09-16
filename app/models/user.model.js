const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    photo_profil: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
