$(document).ready(function () {
    // alert('files attached')  ;   
    let draggableId;
    var topicSelected = [];

    // Function for drag and drop
    // ==========================================
    function dragAndDrop() {
        $(".logoCard").draggable({
            appendTo: "body",
            cursor: "move",
            helper: 'clone',
            revert: "invalid",
            //    revert:true
        });

        $("#launchPad").droppable({
            tolerance: "intersect",
            accept: ".logoCard",
            activeClass: "ui-state-default",
            hoverClass: "ui-state-hover",
            drop: function (event, ui) {
                $("#launchPad").append($(ui.draggable));
                $(".logoCard").height(20);
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

                // console.log(draggableId);
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
        // alert('topic selected: ' + topicSelected);
        localStorage.setItem("vTopicSelected", topicSelected); 
        // This data will be sent to next page
    });

    // Click of Clear button
    // ==================================================
    // 1. This will get all the item in holder box and call different functions depends on the value of topic.
    // 2. The functions inside case will genereate the dynamic html,image and send back to it's position as original img and div gets  
    //    moved when we dragged it from its position
    // 3. dragAndDrop() is called on each function to attach drag and drop event back to each element
    // 4. At the end clear out the holder div and empty the topicSelected array

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

        function generateHtmlDiv() {
            //    alert('inside function');
            let div = $('<div>');
            let img = $('<img>');
            div.attr('class', 'col-md-4 logoCard');
            div.attr('id', 'HTML-text');
            div.attr('data-name', 'HTML');
            img.attr('id', 'html');
            img.attr('src', './images/html-2.png');
            img.attr('alt', 'HTML');
            div.append(img);
            $('#launchPad').append(div);
            dragAndDrop();
        }

        function generateCssDiv() {
            // alert('inside function');
            let div = $('<div>');
            let img = $('<img>');
            div.attr('class', 'col-md-4 logoCard');
            div.attr('id', 'Css-text');
            div.attr('data-name', 'CSS');
            img.attr('id', 'html');
            img.attr('src', './images/css.png');
            img.attr('alt', 'CSS');
            div.append(img);
            $('#launchPad').append(div);
            dragAndDrop();
        }

        function generateJsDiv() {
            // alert('inside function');
            let div = $('<div>');
            let img = $('<img>');
            div.attr('class', 'col-md-4 logoCard');
            div.attr('id', 'JS-text');
            div.attr('data-name', 'JS');
            img.attr('id', 'html');
            img.attr('src', './images/JS.png');
            img.attr('alt', 'JS');
            div.append(img);
            $('#launchPad').append(div);
            dragAndDrop();
        }

        $('.holder').text('');
        topicSelected = [];

    });
});