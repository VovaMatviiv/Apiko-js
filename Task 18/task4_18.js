const dog = {
    sound: 'bark',
    greet: function() {
      setTimeout(() => {
        console.log(this.sound);
      }, 0);
    }
  };
  
  dog.greet(); // повинно вивести "bark" в консоль
  