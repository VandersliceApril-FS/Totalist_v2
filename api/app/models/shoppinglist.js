'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoppingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.ShoppingList.hasMany(models.Item)
      models.ShoppingList.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  ShoppingList.init({
    title: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    type: DataTypes.ENUM('public', 'private'),
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'ShoppingList',
  });
  return ShoppingList;
};