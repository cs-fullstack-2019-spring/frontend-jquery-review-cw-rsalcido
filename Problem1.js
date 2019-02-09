// added border and counted the length of the array to alert the the number of paragraphs.
// total paragraph count 7
$("#btn1").click(function(){
    $("p").css("border","3px solid green")
    alert("The number of paragraphs in this doc is, "+ $("p").length)
});

/// second problem red boders, p tag count and alert.
// ouline only 1st div three rows
$("#btn2").click(function(){
    $(".firstdiv:first >p").css("border","3px solid red")
    alert("The number of paragraphs in the First DIV is, "+ $(".firstdiv:first >p").length)
});

 //// third part of number 1
// outline only 2rd div total of 3 lines
$("#btn3").click(function(){
    $(".seconddiv:first >p").css("border","3px solid blue")
    alert("The number of paragraphs in the First DIV is, "+ $(".seconddiv:first >p").length)
});


// number 2 alternating buttons'

$(function(){
$("#btn4").prop("enabled",true);
$("#btn5").prop("disabled",false);


});