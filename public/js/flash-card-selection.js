$(document).ready(function () {
    // alert('files attached')  ;   
    let draggableId;
    var topicSelected = [];
    localStorage.setItem("vTopicSelected","");
   

    var level = localStorage.getItem("skillLvl");



    // Function for drag and drop
    // ==========================================
    function dragAndDrop() {
        $(".logoCard").draggable({
            appendTo: "body",
            cursor: "move",
            helper: 'clone',
            revert: "invalid",
            drag: function (event, ui) {
                console.log("in drag");
                $(this).addClass('ui-draggable-dragging');
            }

        });

        $(".holder").droppable({
            tolerance: "intersect",
            accept: ".logoCard",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                $('.holder h2').text('');
                draggableId = ui.draggable.attr("data-name");
                topicSelected.push(draggableId);
                $(this).append($(ui.draggable));
            }
        });
    }

    // calling the dragAndDrop function
    // ============================================
    dragAndDrop();

    // Click of continue button
    // ==============================================
    //Passing the value of topicSelected to another js file flash-card.js using local storage.
    $('.continue').on('click', function () {
        console.log("Cotinue click : " + topicSelected);
        localStorage.setItem("vTopicSelected", topicSelected);
        // if(localStorage.getItem('vTopicSelected')===null){
        //     alert('Stop');
        // }
        switch (level) {
            case "1": {
                generateCssDiv("1");
                generateHtmlDiv("1");
                generateJsDiv("1");
            }
            break;

            case "2": {
                generateCssDiv("2");
                generateHtmlDiv("2");
                generateJsDiv("2");
            }
            break;
            case "3": {
                generateCssDiv("3");
                generateHtmlDiv("3");
                generateJsDiv("3");
            }
            break;
        };

    });


    // Click of Clear button
    // ==================================================
    // 1. This will get all the item in holder box and call different functions depends on the value of topic.
    // 2. The functions inside case will genereate the dynamic image and send back to it's position as original img and div gets  
    //    moved when we dragged it from its position
    // 3. At the end clear out the holder div and empty the topicSelected array

    $('.clearBtn').on('click', function () {

        for (var i = 0; i < topicSelected.length; i++) {
            let topic = topicSelected[i];
            switch (topic) {
                case 'HTML':
                    generateHtmlDiv();
                    break;
                case 'CSS':
                    generateCssDiv();
                    break;
                case 'JS':
                    generateJsDiv()
                    break;
            }
        }

        function generateHtmlDiv(skill) {
           
            let img = $('<img>');
          
            img.attr('id', 'html');
            img.attr('data-name', 'HTML');
            img.attr('src', './images/html-2.png');
            img.attr('alt', 'HTML');
           
            $('#HTML-text').append(img);
           
        }

        function generateCssDiv(skill) {
           
            let img = $('<img>');
            
            img.attr('id', 'css');
            img.attr('data-name', 'CSS');
            img.attr('src', './images/css.png');
            img.attr('alt', 'CSS');
            
            $('#CSS-text').append(img);
           
        }

        function generateJsDiv(skill) {
           
            let img = $('<img>');
            
            img.attr('id', 'JS');
            img.attr('data-name', 'JS');
            img.attr('src', './images/JS.png');
            img.attr('alt', 'JS');
           
            $('#JS-text').append(img);
            
        }

        $('.holder').text('');
        topicSelected = [];
        localStorage.removeItem('vTopicSelected');
        // dragAndDrop();
        location.reload();
    });
});