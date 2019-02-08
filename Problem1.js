// added border and counted the length of the array to alert the the number of paragraphs.
//
$("#btn1").click(function(){
    $("p").css("border","3px solid green")
    alert("The number of paragraphs in this doc is, "+ $("p").length)
});

/// second problem red boders, p tag count and alert.

$("#btn2").click(function(){
    $(".firstdiv:first >p").css("border","3px solid red")
    alert("The number of paragraphs in the First DIV is, "+ $("p").length)
});

 //// third part of number 1

$("#btn3").click(function(){
    $(".seconddiv:first >p").css("border","3px solid blue")
    alert("The number of paragraphs in the First DIV is, "+ $("p").length)
});