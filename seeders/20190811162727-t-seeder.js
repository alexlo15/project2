'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Topic', [{
        name: 'HTML'
      }, 
      {
        name: 'CSS'
      },
      {
        name: 'Javascript'
      }
    ], {});

  },

};