'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.ShoppingList)
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: { args: true, msg: 'Email is already in use' },
      allowNull: { args: false, msg: 'Email is required' },
      validate: {
        isEmail: { args: true, msg: 'Email is not correct format' },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Password is required' }
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
        isUUID: { args: 4, msg: 'Id not valid, please try again' }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};