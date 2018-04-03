/*
//PARTNER EXERCISE 1

$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$('li:first-child').css('color', 'green');
$('li:last-child').css('color', 'pink');
$('#brown-div').css('color', 'brown');

//PARTNER EXERCISE 2

var clicked = function () 
    alert($('#my-input').val());
}

$('button').click(clicked);

*/

//PARTNER EXERCISE 3

//add
var clicked = function () {
  $('.students').append('<li>' + $('#my-input').val() + '</li>');
}

$('.btn').click(clicked);

//remove

$('.students').on('click', 'li', function () {
    $(this).remove();
});




//CALL BACK FUNCTION

//EX3
/*var returnTime = function (time) {
    alert('The current time is: ' + time);
};

var getTime = function (f) {
    var time = new Date();
    f(time);
}

getTime(returnTime);*/

//ex4
/*var displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

var logData = function (data) {
    console.log(data); 
}

displayData(alert, logData, "I like to party");*/


