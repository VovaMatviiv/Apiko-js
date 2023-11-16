function removeObj(arrayOfObj, keyName, value) {
    // Використовуємо метод filter для відбору об'єктів, які не відповідають умові
    const newArray = arrayOfObj.filter(obj => obj[keyName] !== value);
  
    // Виводимо у консоль результат
    console.log(newArray);
  }
  
  // Приклад використання
  const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
  
  removeObj(arr, "age", 2);  // Виведе [{ age: 1 }]
  removeObj(arr, "year", 2); // Виведе [{ age: 1 }, { age: 2 }, { age: 2 }]

  