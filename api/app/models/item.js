'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Item.belongsTo(models.ShoppingList, { foreignKey: 'shoppingListId'})
    }
  }
  Item.init({
    name: DataTypes.STRING,
    costPerItem: DataTypes.DECIMAL,
    quantity: DataTypes.NUMBER,
    totalItemCost: DataTypes.DECIMAL,
    isComplete: DataTypes.BOOLEAN,
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    store: {
      type: DataTypes.STRING
    },
    shoppingListId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};