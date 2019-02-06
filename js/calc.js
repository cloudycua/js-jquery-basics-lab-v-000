$(document).ready(function(){
  result()
})

function result() {
  $('#equals').on('click', function() {
    var num1 = parseFloat($('#number1').val())
    var num2 = parseFloat($('#number2').val())
    var operater = $('#operater').val()
    $('#result').html(calculate(num1, num2, operater))
  })
}

  function calculate(num1, num2, operater) {
    var answer = 0

    switch (operater) {
      case "+":
        answer = num1 + num2;
        break;
      case "/":
        answer = num1 / num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
        break;
    }

    return answer
  }
