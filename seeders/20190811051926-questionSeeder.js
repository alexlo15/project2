'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Question', [{
        question: 'John Doe',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hastly Text Markup Language',
        choice3: 'Handlebar Text Markup Language',
        skillLevel: 1,
        topicId: 1
      },
      {
        question: 'John Doe',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hastly Text Markup Language',
        choice3: 'Handlebar Text Markup Language',
        skillLevel: 1,
        topicId: 1
      },
      {
        question: 'John Doe',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hastly Text Markup Language',
        choice3: 'Handlebar Text Markup Language',
        skillLevel: 1,
        topicId: 1
      },
      {
        question: 'John Doe',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hastly Text Markup Language',
        choice3: 'Handlebar Text Markup Language',
        skillLevel: 1,
        topicId: 1
      },
      {
        question: 'John Doe',
        choice1: 'Hyper Text Markup Language',
        choice2: 'Hastly Text Markup Language',
        choice3: 'Handlebar Text Markup Language',
        skillLevel: 1,
        topicId: 1
      },
    ], {});

  },

};
