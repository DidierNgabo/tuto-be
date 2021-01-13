module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'tutorials',
      [
        {
          title: 'first post',
          description: 'this is the first tutorial in java',
          published: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'second post',
          description: 'this is the first tutorial in javascript',
          published: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('tutorials', null, {});
  },
};
