'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Topic', [{
      name: "HTML",
      skillLevel: "Easy"
    }, {
      name: "HTML",
      skillLevel: "Moderate"
    }, {
      name: "HTML",
      skillLevel: "Hard"
    }, {
      name: "CCS",
      skillLevel: "Easy"
    }, {
      name: "CCS",
      skillLevel: "Moderate"
    }, {
      name: "CCS",
      skillLevel: "Hard"
    }, {
      name: "Javascript",
      skillLevel: "Easy"
    }, {
      name: "Javascript",
      skillLevel: "Moderate"
    }, {
      name: "Javascript",
      skillLevel: "Hard"
    }], {});

  },

};