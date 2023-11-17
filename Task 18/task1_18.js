var globalVariable = "Я знаходжусь в глобальній області видимості";

function logGlobalVariable() {
  console.log(globalVariable);
}

logGlobalVariable();


function functionScopeExample() {
  var functionVariable = "Я знаходжусь в області видимості функції";

  console.log(functionVariable);
}

functionScopeExample();



function blockScopeExample() {
  {
    let blockVariable = "Я знаходжусь в області видимості блоку коду";

    console.log(blockVariable);
  }

}

blockScopeExample();
