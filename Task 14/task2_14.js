function isEvenArray(initialArray) {
    const allEven = initialArray.every(num => num % 2 === 0);
  
    console.log(allEven ? "YES" : "NO");
  }
  
  isEvenArray([1, 2, 3, 9]); 
  isEvenArray([2, 4, 6]);    
  isEvenArray([1, 3, 5, 7, 9, 8]);    
