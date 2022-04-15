'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // add a 'store' field since I forgot to add one in creation
    queryInterface.addColumn('Items', 'store', {
      type: Sequelize.STRING,
      allowNull: true
    })

    // edit 'costPerItem' to :
      //show 2 decimal places
      //have a min value of 0 (no negatives)
    queryInterface.changeColumn('Items', 'costPerItem', {
      type: Sequelize.DECIMAL(10,2),
      validate: {
        min: 0
      }
    })

    // edit 'quantity' to have: 
      // default value of 1
      // a min value of 1 (no negatives)
    queryInterface.changeColumn('Items', 'quantity', {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Items', 'store');
  }
};
