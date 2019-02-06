$(document).ready(function(){
  result()
})

function result() {
  $('#result').on('click', function() {
    var num1 = parseFloat($('#number1').val())
    var num2 = parseFloat($('#number2').val())
    var operation = $('#operation').val()
    $('#result').html(calculate(num1, num2, operation))
  })
}

  function calculate(num1, num2, operation) {
    var answer = 0

    switch (operation) {
      case "+":
        answer = num1 + num2;
        break;
      case "/":
        answer = num1 / num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*"
        answer = num1 * num2;
        break;
    }

    return answer
  }
