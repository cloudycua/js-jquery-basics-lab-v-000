$(document).ready(function(){
  result()
})

function result() {
  $('#equals').on('click', function() {
    var num1 = parseFloat($('#number1').val())
    var num2 = parseFloat($('#number2').val())
    var operater = $('#operater').val()
    answer = calculate(num1, num2, operater)
    $('#result').html(answer)
  })
}

  function calculate(num1, num2, operater) {
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
