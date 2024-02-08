let i = 0;
let inputArr = []; 
let numberofminus = 0;
let caseOfZeroCounter =0;
let charArr;
document.querySelector(".dotBtn").disabled = true;
document.querySelector(".equalBtn").disabled = true;
disableOpBtn()

const inputBtn = document.querySelectorAll('input');
inputBtn.forEach(input => input.addEventListener('click', (e) => {
const paragraph = document.querySelector('p')

  if(paragraph.textContent == "Error"){
    inputArr = [];
  }

  if (e.target.value == "AC"){
    paragraph.textContent = "";
    disableOpBtn();
    inputArr = [];
  } 
  
  else if (e.target.value != "AC" && e.target.value != "DEL"){
    inputArr[i] = e.target.value; 

    if(inputArr[i]!=0){
      document.querySelector(".zeroBtn").disabled = false; 
    } else if(inputArr[i]==0){
        if(i == 0){
          document.querySelector(".zeroBtn").disabled = true;   
        } else{
          document.querySelector(".zeroBtn").disabled = false;
        }   
      }


    // Populate display with numbers
    let stringToBeDisplayed;
    let string = inputArr.toString();
    charArr =string.replace(/,/g, "");

    stringToBeDisplayed = charArr;

    if(stringToBeDisplayed.length>9){
      paragraph.textContent = stringToBeDisplayed.slice((stringToBeDisplayed.length)-9);
    } else{
      paragraph.textContent = stringToBeDisplayed;
    }


    // Getting Numbers and operator
    let currentString1 = charArr;
    let numOpArray = getNumbersAndOperator(currentString1);
    let number1String = numOpArray[0];
    let operatorString = numOpArray[1];
    let number2String = numOpArray[2];
    let number1Numeric = parseFloat(number1String);
    let number2Numeric = parseFloat(number2String);

    if(typeof(number1Numeric) === "number" && typeof(number2Numeric) === "number" && !isNaN(number2Numeric) && operatorString !=""){
      document.querySelector(".equalBtn").disabled = false;
    }

    console.log("num1 is " +number1Numeric)
    console.log("num2 is " +number2Numeric)
    console.log("op is " +operatorString)


    // Buttons disabled/enabled states
    if(typeof(number1Numeric) === "number" && !isNaN(number1Numeric)){
      enableOpBtn()
      document.querySelector(".dotBtn").disabled = false;
      
      if(operatorString!=""){
        disableOpBtn()
      }

      if(number1String.includes(".")){
        document.querySelector(".dotBtn").disabled = true;
      }

      if(typeof(number2Numeric) === "number" && !isNaN(number2Numeric)){
        document.querySelector(".dotBtn").disabled = false;
        document.querySelector(".subBtn").disabled = true;
       
        if(number2String.includes(".")){
          document.querySelector(".dotBtn").disabled = true;
          document.querySelector(".subBtn").disabled = true;
        }
      }

      if(number1String.endsWith(".") || number2String.endsWith(".")){
      disableOpBtn()
      document.querySelector(".subBtn").disabled = true;
      } else if(operatorString ==""){
        document.querySelector(".subBtn").disabled = false;
      }
    
      if(number2String.includes("-")){
        document.querySelector(".subBtn").disabled = true;
      }
    }


    // Do calculations
    if (e.target.value == "="){
      document.querySelector(".equalBtn").disabled = true;
      enableOpBtn()
      document.querySelector(".subBtn").disabled = false;
      let opResult = calculate(operatorString, number1Numeric, number2Numeric);

      const paragraph = document. querySelector('p');
      paragraph.textContent = opResult;
      inputArr = [];

      if(opResult == 0){
        inputArr = []
        inputArr[0] = 0;
        disableOpBtn;
      } else{
        inputArr[0] = opResult;
        }
    }
  }


  //DEL
  else if (e.target.value == "DEL") {
    let stringToDisplay1= inputArr.toString().replace(/,/g, "").slice(0,-1)
    inputArr.pop();

      if(stringToDisplay1.length>9){
        paragraph.textContent = stringToDisplay1.slice((stringToDisplay1.length)-9);
      } else{
       paragraph.textContent = stringToDisplay1;
      }
      
      console.log(inputArr.length)
      if(inputArr.length==0){
        disableOpBtn();
      }
  } 


i++;
}))

 // Function Block
function calculate(operator, num1, num2){
  let num1Digits = num1.toString().split('').length;
  let num2Digits = num2.toString().split('').length;
  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
    DigitMultiplier = num2Digits
    };

  switch(operator){
    case '+':
      return Number(Math.round(num1+num2+'e'+DigitMultiplier)+'e-'+DigitMultiplier);
    case '-':
      return Number(Math.round(num1-num2+'e'+DigitMultiplier)+'e-'+DigitMultiplier);
    case 'x':
      return Number(Math.round(num1*num2+'e'+DigitMultiplier)+'e-'+DigitMultiplier);
    case '/':
      return Number(Math.round(num1/num2+'e'+DigitMultiplier)+'e-'+DigitMultiplier);        
  }
}


function getNumbersAndOperator(currentString) {
let number1 = "";
let number2 = "";
let operator = "";
let operatorIndex;
let unchangedString = currentString;
  
  if(currentString.includes("=")){
    currentString = currentString.slice(0, currentString.length-1)
    unchangedString = unchangedString.slice(0, unchangedString.length-1)
  }else{
    currentString = currentString;
    }
    if(currentString[0]=="-"){
      number1 = currentString[0];
      currentString = currentString.slice(1, currentString.length); 
    }

    for (let i = 0; i < currentString.length; i++) {
      const regex = /[0-9]/g;
      if(currentString[i].match(regex) || currentString[i] == "."  && operator ==""){
        number1 = number1.concat(currentString[i])    
      } 
  
      if(currentString[i] == "+" || currentString[i] == "-" || currentString[i] == "x" || currentString[i] == "/"){
        operator = currentString[i];
        operatorIndex = i;
        break
      }
    }
  
  let Num1L = number1.length;
  number2 = unchangedString.slice(Num1L+1, unchangedString.length);
  return [number1, operator, number2];
}


function disableNumBtn(){
  var disabledBtn = document.querySelectorAll(".numBtn");
  disabledBtn.forEach(numBtn => {
  numBtn.disabled = true;
  })
}


function enableNumBtn(){
  var disabledBtn = document.querySelectorAll(".numBtn");
  disabledBtn.forEach(numBtn => {
  numBtn.disabled = false;
  })
}


function disableOpBtn(){
  var disabledBtn = document.querySelectorAll(".operationBtn");
  disabledBtn.forEach(operationBtn => {
  operationBtn.disabled = true;
  })
}


function enableOpBtn(){
  var disabledBtn = document.querySelectorAll(".operationBtn");
  disabledBtn.forEach(operationBtn => {
  operationBtn.disabled = false;
  })
}







  

