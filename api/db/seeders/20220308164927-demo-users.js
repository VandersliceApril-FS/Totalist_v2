'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'April',
          lastName: 'Vanderslice',
          email: 'april@email.com',
          password: await bcrypt.hash('pass1234', 1),
          createdAt: new Date(),
          updatedAt: new Date(),
          id: '4d9f48fa-d075-4736-9421-af08af9d1653'
        },
        {
          firstName: 'Shannon',
          lastName: 'Hunter',
          email: 'shannonh@email.com',
          password: await bcrypt.hash('pass1234', 1),
          createdAt: new Date(),
          updatedAt: new Date(),
          id: 'b993d4fa-0c2f-48df-87e3-9e70cf01d6e9'
        },
        {
          firstName: 'Bella',
          lastName: 'Sanchez',
          email: 'bella.sanchez@example.com',
          password: await bcrypt.hash('pass1234', 1),
          createdAt: new Date(),
          updatedAt: new Date(),
          id: '7d893859-0744-4fc7-9e9c-ea41fa2933b0'
        },
        {
          firstName: 'Lawrence',
          lastName: 'Elliot',
          email: 'lawrence.elliot@example.com',
          password: await bcrypt.hash('pass1234', 1),
          createdAt: new Date(),
          updatedAt: new Date(),
          id: '41faab7f-c4e4-41bc-a037-14c95a083674'
        },
      ],
      {},
    ),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
