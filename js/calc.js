$(document).ready(function(){
  result()
})

var num1 = $('#number1');
var num2 = $('#number2');
var operation = $('#operation');

function result() {
  $('#equals').on('click', function() {
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    operation = operation.val();
    $('#result').html(calculate(num1, num2, operation))
  })
}

function calculate(num1, num2, operation) {
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
