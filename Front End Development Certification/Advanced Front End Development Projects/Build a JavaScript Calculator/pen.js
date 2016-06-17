$(function() {
  var exp = 0.0;
  var sign = '';
  var expression = '';
  var currExpression = '';
  $('.number').click(function() {
    if (currExpression.length < 18) {
      currExpression += $(this).val();
      $('#screen').get(0).value = currExpression;
      console.log(currExpression);
    }
  });
  $('.sign').click(function() {
    if (sign != '') {
      switch (sign) {
        case '+':
          exp += parseFloat(currExpression);
          break;
        case '-':
          exp -= parseFloat(currExpression);
          break;
        case 'x':
          exp *= parseFloat(currExpression);
          break;
        case '/':
          exp /= parseFloat(currExpression);
          break;
        case '%':
          exp = (exp * parseFloat(currExpression)) / 100;
          break;
      }
      sign = '';
    } else {
      exp = parseFloat(currExpression);
    }

    $('#screen').get(0).value = exp;
    switch ($(this).val()) {
      case 'eq':
        currExpression = exp;
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
      case '%':
        sign = $(this).val();
        console.log(sign);
        break;
      case 'ac':
        exp = 0.0;
        currExpression = 0.0;
        $('#screen').get(0).value = '';
        break;
    }
    currExpression = '';
  });
  $('#CE').click(function() {
    sign = '';
    currExpression = exp;
    $('#screen').get(0).value = exp;
  });
});
