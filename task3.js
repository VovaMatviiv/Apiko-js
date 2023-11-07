function printSeasonByMonth(month) {
    const uppercaseMonth = month.toUpperCase();
  
    switch (uppercaseMonth) {
      case "DECEMBER":
      case "JANUARY":
      case "FEBRUARY":
        console.log("winter");
        break;
      case "MARCH":
      case "APRIL":
      case "MAY":
        console.log("spring");
        break;
      case "JUNE":
      case "JULY":
      case "AUGUST":
        console.log("summer");
        break;
      case "SEPTEMBER":
      case "OCTOBER":
      case "NOVEMBER":
        console.log("autumn");
        break;
      default:
        console.log("Невідомий місяць");
    }
  }
  
  printSeasonByMonth("SEPTEMBER"); 
  printSeasonByMonth("NOVEMBER");  
  printSeasonByMonth("JULY");      
  printSeasonByMonth("APRIL");     
  printSeasonByMonth("MAY");      
  printSeasonByMonth("INVALID");  
  