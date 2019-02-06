$(document).ready(function(){
  result()
})

var num1 = parseFloat($('#number1').val())
var num2 = parseFloat($('#number2').val())
var operater = $('#operation').val()

function result() {
  $('#equals').on('click', function() {
    $('#result').html(calculate())
  })
}

  function calculate() {
    switch (operater) {
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
