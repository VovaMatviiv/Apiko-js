function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;
  
    for (let i = 0; i < initialArray.length; i++) {
      const element = initialArray[i];
      if (typeof element === "number" && !isNaN(element)) {
        sum += element;
      }
    }
  
    console.log("Сума чисел у масиві: " + sum);
  }
  
  calculateSumOfArray();
  