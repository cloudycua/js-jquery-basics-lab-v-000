$(document).ready(function(){
  result()
})

var num1 = $('#number1');
var num2 = $('#number2');
var operation = $('#operation');

function doMath() {
  $('#equals').on('click', function() {
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operation = operation.val();
    validate(num1, num2, operation);
  })
}

function result(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
      break;
    case "/":
      return num1 / num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
  }
}

function validate(num1, num2, operation) {
  if (operation == "+" || operation == "-" || operation == "*" || operation == "/"){
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ){
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      $('#result').html(calculate(num1, num2, operation));
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}
