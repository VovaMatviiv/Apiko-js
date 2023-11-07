function calculateWordsInString(string) {
    const words = string.split(" ");
    
    const filteredWords = words.filter(word => word.trim() !== "");
    
    if (filteredWords.length > 0) {
      console.log(`"${string}" - ${filteredWords.length} слова`);
    } else {
      console.log(`"${string}" - немає слів`);
    }
  }
  
  calculateWordsInString("Easy string for count");  
  calculateWordsInString("Easy");  
  calculateWordsInString("Some string with a triple   space");  
  calculateWordsInString("Some?  string, with a triple   space");  
  