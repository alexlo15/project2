"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Question",
      [
        {
          question: `What does HTML stands for?`,
          choice1: `Hyper Text Markup Language`,
          choice2: `Hastly Text Markup Language`,
          choice3: `Handlebar Text Markup Language`,
          topicId: 1
        },
        {
          question: `What is the correct HTML element for the largest heading`,
          choice1: `<h1>`,
          choice2: `<p>`,
          choice3: `<h6>`,
          topicId: 1
        },
        {
          question: `What is the correct HTML for adding a background color?`,
          choice1: `<body style="background-color:yellow;">`,
          choice2: `<body style="color:yellow;">`,
          choice3: `<body style="color:yellow;">`,
          topicId: 1
        },
        {
          question: `What is the correct HTML for creating a hyperlink?`,
          choice1: `<a href="xyz">XYZ</a>`,
          choice2: `<a src="xyz">XYZ</a>`,
          choice3: `<a url="xyz">XYZ</a>`,
          topicId: 1
        },
        {
          question: `How can you open a link in a new tab/browser window?`,
          choice1: `<a href="url" target="_blank">`,
          choice2: `<a href="href" target="_blank">`,
          choice3: `<a href="src" target="_blank">`,
          topicId: 1
        },
        {
          question: `Markup tags tell the web browser`,
          choice1: `How to display the page`,
          choice2: `How to organise the page`,
          choice3: `How to display message box on page`,
          topicId: 2
        },
        {
          question: `www is based on which model?`,
          choice1: `Client-server`,
          choice2: `Local-server`,
          choice3: `3-tier`,
          topicId: 2
        },
        {
          question: `What are Empty elements and is it valid?`,
          choice1: `Empty elements are element with no data`,
          choice2: `No, there is no such terms as Empty Element`,
          choice3: `No, it is not valid to use Empty Element`,
          topicId: 2
        },
        {
          question: `Which of the following attributes of text box control allow to limit the maximum character?`,
          choice1: `maxlength`,
          choice2: `size`,
          choice3: `len`,
          topicId: 2
        },
        {
          question: `Web pages starts with which of the following tag?`,
          choice1: `<HTML>`,
          choice2: `<Body>`,
          choice3: `<Title>`,
          topicId: 2
        },
        {
          question: `HTML is a subset of`,
          choice1: `SGML`,
          choice2: `SGMD`,
          choice3: `SGMT`,
          topicId: 3
        },
        {
          question: `The attribute, which define the relationship between current document and HREF'ed URL is`,
          choice1: `REL`,
          choice2: `URL`,
          choice3: `REV`,
          topicId: 3
        },
        {
          question: `Correct HTML to left align the content inside a table cell is`,
          choice1: `<td align = "left">`,
          choice2: `<td raligh = "left" >`,
          choice3: `<td leftalign>`,
          topicId: 3
        },
        {
          question: `Which of the tag is used to creates a number list?`,
          choice1: `<LI> and <OL>`,
          choice2: `<OL>`,
          choice3: `<LI>`,
          topicId: 3
        },
        {
          question: `Symbol used at the beginning of the HREF text is`,
          choice1: `#`,
          choice2: `$`,
          choice3: `&`,
          topicId: 3
        },
        {
          question: `What does CSS stand for?`,
          choice1: `Cascading Style Sheet`,
          choice2: `Creative Style Sheet`,
          choice3: `Computer Style Sheets`,
          topicId: 4
        },
        {
          question: `What is the correct HTML for referring to an external style sheet?`,
          choice1: `<style src="mystyle.css">`,
          choice2: `<link rel="stylesheet" type="text/css" href="mystle.css">`,
          choice3: `<stylesheet>mystyle.css</stylesheet>`,
          topicId: 4
        },
        {
          question: `Where in an HTML document is the correct place to refer to an external style sheet?`,
          choice1: `in the <head> section`,
          choice2: `in the <body> section`,
          choice3: `at the end of the document`,
          topicId: 4
        },
        {
          question: `Which HTML tag is used to define an internal style sheet?`,
          choice1: `<style>`,
          choice2: `<css>`,
          choice3: `<script>`,
          topicId: 4
        },
        {
          question: `Which HTML attribute is used to define inline styles?`,
          choice1: `style`,
          choice2: `class`,
          choice3: `font`,
          topicId: 4
        },
        {
          question: `Which is the correct CSS syntax?`,
          choice1: `body{color:black;}`,
          choice2: `body:color=black;`,
          choice3: `{body:color=black;}`,
          topicId: 5
        },
        {
          question: `How do you insert a comment in a CSS file?`,
          choice1: `/*this is a comment*/`,
          choice2: `//this is a comment//`,
          choice3: `this is a comment`,
          topicId: 5
        },
        {
          question: `Which property is used to change the background color?`,
          choice1: `background-color`,
          choice2: `bgcolor`,
          choice3: `color`,
          topicId: 5
        },
        {
          question: `How do you add a background color for all <h1> elements?`,
          choice1: `h1 {background-color:#ffffff;)`,
          choice2: `h1.all {background-color:#ffffff;)`,
          choice3: `all.h1 {background-color:#ffffff;)`,
          topicId: 5
        },
        {
          question: `Which CSS property is used to change the text color of an element?`,
          choice1: `text-color`,
          choice2: `color`,
          choice3: `fgcolor`,
          topicId: 5
        },
        {
          question: `Which CSS property controls the text size?`,
          choice1: `text-size`,
          choice2: `font-style`,
          choice3: `font-size`,
          topicId: 6
        },
        {
          question: `Which property is used to change the font of an element?`,
          choice1: `font-family`,
          choice2: `font-style`,
          choice3: `font-weight`,
          topicId: 6
        },
        {
          question: `How do you make the text bold?`,
          choice1: `font: bold;`,
          choice2: `font-weight:bold;`,
          choice3: `style:bold;`,
          topicId: 6
        },
        {
          question: `Which property is used to change the left margin of an element?`,
          choice1: `margin-left`,
          choice2: `padding-left`,
          choice3: `indent`,
          topicId: 6
        },
        {
          question: `How do you select elements with class name "test"?`,
          choice1: `.test`,
          choice2: `#test`,
          choice3: `test`,
          topicId: 6
        },
        {
          question: `Variables are the ______ of programming?`,
          choice1: `Nouns`,
          choice2: `Verbs`,
          choice3: `Pronouns`,
          topicId: 7
        },
        {
          question: `Which of the following are not a Variable?`,
          choice1: `Prompts`,
          choice2: `Strings`,
          choice3: `Numbers`,
          topicId: 7
        },
        {
          question: `Booleans can only be ?`,
          choice1: `True/False`,
          choice2: `Numbers`,
          choice3: `Strings`,
          topicId: 7
        },
        {
          question: `What numbers will be returned?  Math.floor(Math.random()*10);`,
          choice1: `0 - 9`,
          choice2: `1 - 10`,
          choice3: `0 - 11`,
          topicId: 7
        },
        {
          question: `Var x = 3; Var y = 5; Var z = x * y; What i s Var z ?`,
          choice1: `15`,
          choice2: `8`,
          choice3: `2`,
          topicId: 7
        },
        {
          question: `Strings can be created in JS by using?`,
          choice1: `""`,
          choice2: `Varchar`,
          choice3: `{}`,
          topicId: 8
        },
        {
          question: `Var x = "Dolphins" + 3 + 3`,
          choice1: `Dolphins33`,
          choice2: `Dolphins3 3`,
          choice3: `Dolphins +3 +3`,
          topicId: 8
        },
        {
          question: `What are elements of an Array called?`,
          choice1: `Index`,
          choice2: `Position`,
          choice3: `Boolean`,
          topicId: 8
        },
        {
          question: `Var characters = ["Micky", "Goofy", "Minnie"]; Which Character is in the 1st index?`,
          choice1: `Goofy`,
          choice2: `Micky`,
          choice3: `Minnie`,
          topicId: 8
        },
        {
          question: ` What vegetables does the for loop read?   Var vegetables = [“Carrots”, “Peas”, “Lettuce”, “Tomatoes”] For(var i=0; i<vegetables.length; i++) Console.log(“I love eating ” + vegetables[3];`,
          choice1: `Tomatoes`,
          choice2: `Carrots`,
          choice3: `Peas`,
          topicId: 8
        },
        {
          question: `Javascript is the programming language `,
          choice1: `HTML`,
          choice2: `Node.JS`,
          choice3: `Internet`,
          topicId: 9
        },
        {
          question: `Which company developed JavaScript`,
          choice1: `Netscape`,
          choice2: `Dell`,
          choice3: `Apple`,
          topicId: 9
        },
        {
          question: `After your page loads, a box appears and ask for your age. What is this function called?`,
          choice1: `Prompt`,
          choice2: `Alert`,
          choice3: `Confirm`,
          topicId: 9
        },
        {
          question: `How many indexes can an Array have?`,
          choice1: `unlimited`,
          choice2: `50`,
          choice3: `5`,
          topicId: 9
        },
        {
          question: `Inside which HTML element do we put the JavaScript?`,
          choice1: `<script>`,
          choice2: `<js>`,
          choice3: `<javascript>`,
          topicId: 9
        }
      ],
      {}
    );
  }
};
