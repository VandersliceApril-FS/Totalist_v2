'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'ShoppingLists',
      [
        {
          title: 'Master Bedroom',
          total: '0',
          type: 'private',
          id: '49957b19-8d9d-4b99-8d04-b2a267f6bbc7',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '4d9f48fa-d075-4736-9421-af08af9d1653'
        },
        {
          title: 'Clothes',
          total: '0',
          type: 'public',
          id: '7baac0cc-d893-4ce2-8184-6a5e4e4601d0',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '4d9f48fa-d075-4736-9421-af08af9d1653'
        },
        {
          title: 'Houseplants',
          total: '0',
          type: 'public',
          id: '4b73aa29-56e5-4586-ba82-7ebfca54f78f',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '4d9f48fa-d075-4736-9421-af08af9d1653',
        },
        {
          title: 'Grocery',
          total: '0',
          type: 'public',
          id: '82ef4c74-5836-4744-8b16-a9e4e10f514b',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 'b993d4fa-0c2f-48df-87e3-9e70cf01d6e9'
        }
      ],
      {},
    ),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ShoppingLists', null, {});
  },
};
