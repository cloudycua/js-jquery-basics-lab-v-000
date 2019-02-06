var num1
var num2
var operation

function result() {
  $('').on('click', function() {
    var num1 = $('#number1').val()
    var num2 = $('#number2').val()
    var operation = $('#operation').val()
    var result = 0
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
