function filterArray(initialArray) {
    const stringArray = initialArray.filter(element => typeof element === 'string');
  
    console.log(stringArray);
  }
  
  filterArray([2, 'string', 3, , , 'test']); 