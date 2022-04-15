'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // set delete to cascade so that when a user wants to delete a list, the items are also deleted
    queryInterface.changeColumn('Items', 'shoppingListId', {
      allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      onDelete: 'CASCADE',
      references: {
        model: 'ShoppingLists',
        key: 'id'
      },
    });
   // set delete to cascade so that when a user wants to delete their account, the lists and items are also deleted
    queryInterface.changeColumn('ShoppingLists', 'userId', {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        onDelete: 'SET NULL'

      },
    } )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Items', 'shoppingListId')
    queryInterface.removeColumn('ShoppingLists', 'userId' )
  }
};
