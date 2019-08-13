'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Topic', [{
      name: "HTML",
      skillLevel: "1"
    }, {
      name: "HTML",
      skillLevel: "2"
    }, {
      name: "HTML",
      skillLevel: "3"
    }, {
      name: "CCS",
      skillLevel: "1"
    }, {
      name: "CCS",
      skillLevel: "2"
    }, {
      name: "CCS",
      skillLevel: "3"
    }, {
      name: "Javascript",
      skillLevel: "1"
    }, {
      name: "Javascript",
      skillLevel: "2"
    }, {
      name: "Javascript",
      skillLevel: "3"
    }], {});

  },

};