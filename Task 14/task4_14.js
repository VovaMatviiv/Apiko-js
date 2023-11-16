function findUser(initialObject) {
    const usersArray = Object.entries(initialObject)
      .filter(([name, { age, city }]) => city === "London" && age > 18)
      .map(([name]) => name);
  
    console.log(usersArray);
  }
  
  const users = {
    Max: { age: 23, city: "London" },
    Mike: { age: 20, city: "NY" },
  };
  
  findUser(users); 
  