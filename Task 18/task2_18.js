const car = {
    name: "Tesla",
    model: "X",
    speed: "Max speed : 320 km/h",
  };
  
  function showCarInfo() {
    console.log(this.name, this.model, this.speed,);
  }
  
  const showCarInfoWithCarContext = showCarInfo.bind(car);
  
  showCarInfoWithCarContext();
  