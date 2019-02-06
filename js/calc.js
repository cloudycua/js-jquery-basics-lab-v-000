$(document).ready(function(){
  result()
})

var num1 = $('#number1');
var num2 = $('#number2');
var operation = $('#operation');

function result() {
  $('#equals').on('click', function() {
    $('#result').html(num1 + num2)
  })
}

  function calculate() {
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
