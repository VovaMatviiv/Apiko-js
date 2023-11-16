function unicFn(initialArray) {
    const uniqueArray = [...new Set(initialArray)];
    
    console.log(uniqueArray);
  }
  
  unicFn([2, 3, 1, 3, 3, 7]);
  