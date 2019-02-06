$(document).ready(function(){
  result()
})

var num1 = parseFloat($('#number1').val())
var num2 = parseFloat($('#number2').val())
var operation = $('#operation').val()

function result() {
  $('#result').on('click', function() {
    return $('#result').val(calculate())
  })
}

  function calculate(num1, num2, operation) {
    var result = 0

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*"
        result = num1 * num2;
        break;
    }

    return result
  }
