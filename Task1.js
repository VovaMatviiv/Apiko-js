
function printPowersOfTwoOrError(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      console.error('Помилка: Вхідне значення не є числом');
      return;
    }
  
    for (let i = 1; Math.pow(2, i) <= value; i++) {
      console.log(Math.pow(2, i));
    }
  }
  
  printPowersOfTwoOrError(302);  
  printPowersOfTwoOrError("302");  
  printPowersOfTwoOrError(null);  
  printPowersOfTwoOrError(128);  
  printPowersOfTwoOrError(60);  
  