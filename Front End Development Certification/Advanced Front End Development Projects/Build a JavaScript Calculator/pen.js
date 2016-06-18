$(function() {
  var exp = 0.0;
  var sign = '';
  var expression = '';
  var currExpression = '';
  var result;
  $('.number').click(function() {
    if (currExpression.length < 18) {
      currExpression += $(this).val();
      $('#screen').get(0).value = currExpression;
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
        case 'eq':
          $('#screen').get(0).value = exp;
          break;
      }
      sign = '';
    } else {
      exp = parseFloat(currExpression);
    }

    $('#screen').get(0).value = exp;
    switch ($(this).val()) {
      case 'eq':
      case '+':
      case '-':
      case 'x':
      case '/':
      case '%':
        sign = $(this).val();
        break;
      case 'ac':
        exp = 0.0;
        currExpression = 0.0;
        $('#screen').get(0).value = '';
        break;
    }
    currExpression = '';
    if ($('#screen').get(0).value == 'NaN') {
      $('#screen').get(0).value = 'Error (AC)';
      exp = 0.0;
      currExpression = 0.0;
    }
  });
  $('#CE').click(function() {
    sign = '';
    currExpression = exp;
    $('#screen').get(0).value = exp;
  });
  $('button').click(function() {
    if ($(this).val() != 'eq' && sign == 'eq') {
      exp = 0.0;
      currExpression = $(this).val();
      sign = '';
    }
  });
});
