var maths = 1;
while (maths != 0)
{
  var maths = prompt("Would you like to add, multiply, divide, calculate BMI, convert celsius to fahrenheit, or convert cooking units. Enter (a, m, d, b, c, u, or 0 to exit) ");

  if (maths == "a")
  {
    var add = function(number1, number2) {
      return number1 + number2;
    };

    var number1 = parseInt(prompt("Enter a number: "));
    var number2 = parseInt(prompt("Enter another number: "));
    var result = add(number1, number2);
    alert(result);
  }

  if (maths == "m")
  {
    var add = function(number1, number2) {
      return number1 * number2;
    };

    var number1 = parseInt(prompt("Enter a number: "));
    var number2 = parseInt(prompt("Enter another number: "));
    var result = add(number1, number2);
    alert(result);
  }

  if (maths == "d")
  {
    var add = function(number1, number2) {
      return number1 / number2;
    };

    var number1 = parseInt(prompt("Enter a number: "));
    var number2 = parseInt(prompt("Enter another number: "));
    var result = add(number1, number2);
    alert(result);


  }
  if (maths == "b")
  {
    var number1 = parseInt(prompt("Enter your height: "));
    var number2 = parseInt(prompt("Enter your weight: "));
    number2 = number2 * 0.45;
    number1 = number1 * 0.025;
    number1 = number1 * number1;
    number2 = number2 / number1;
    alert(number2.toFixed(1));
  }

  if (maths == "c")
  {
    var number1 = parseInt(prompt("Enter the temperature in celsius: "));
    number1 = number1 * 1.8;
    number1 = number1 + 32;
    alert(number1.toFixed(1));
  }

  if (maths == "u")
  {
    var cooking = 1;
    while (cooking != 0)
    {
      var cooking = prompt("Would you like to convert ml/cups, tbsp/grams, lb/oz. Enter (m, t, l or enter 0 to exit)");

      if (cooking == "m")
      {
        var ml = prompt("How many ml would you like to convert.")
        var cups;
        cups = ml / 236.5882365;
        alert(ml + " ml is " + cups.toFixed(1) + " cups");
      }

      if (cooking == "t")
      {
        var tbsp = prompt("How many tbsp would you like to convert.")
        var grams;
        grams = tbsp * 12.5;
        alert(tbsp + " tbsp is " + grams.toFixed(1) + " grams");
      }

      if (cooking == "l")
      {
        var lbs = prompt("How many lbs would you like to convert.")
        var oz;
        oz = lbs * 16;
        alert(lbs + " lbs is " + oz.toFixed(1) + " ozs");
      }


    }
  }
}
