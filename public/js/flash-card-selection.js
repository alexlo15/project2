$(document).ready(function () {
// alert('files attached')  ;   
let draggableId;
let topicSelected = [];

    $(".logoCard").draggable({
        appendTo: "body",
        cursor: "move",
        helper: 'clone',
        revert: "invalid",
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
            // $('.holder').text('');
            draggableId = ui.draggable.attr("data-name");
             topicSelected.push(draggableId);
            $(this).append($(ui.draggable));
            
            // console.log(draggableId);
        }
    });
    // console.log(topicSelected);

    $('.continue').on('click',function(){
        alert('topic selected: ' + topicSelected);
        console.log(topicSelected);
    })
});