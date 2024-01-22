let result = [];
let Number1;
let Number2;
let operator;
let currentValue = 0;
let i = 0;
let inputArr = [];
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
    currentValue = 0;
    inputArr = [];
  } 
  
  else if (e.target.value != "AC" && e.target.value != "DEL"){
    enableOpBtn()
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
    let charArr;
    let stringToBeDisplayed;
    let string = inputArr.toString();
    charArr =string.replace(/,/g, "");

    stringToBeDisplayed = charArr;

    if(stringToBeDisplayed.length>9){
      paragraph.textContent = stringToBeDisplayed.slice((stringToBeDisplayed.length)-9);
    } else{
      paragraph.textContent = stringToBeDisplayed;
    }

    // Getting Numbers and Operator
    Number1 = parseFloat(charArr);
    let lengthToCut = Number1.toString().length+1;
    Number2 = parseFloat(charArr.slice(lengthToCut));  

    operator = String((charArr.slice(lengthToCut-1).slice(0, -2)));

  

    if(operator.length>1){
      operator = operator.slice(0,-1);
    }

//???????
    if(e.target.value == "-" && charArr.slice(-2) == "--"){
      console.log("hi")
      disableOpBtn();
    }




    // Decimal places and negative numbers
    if(charArr[0]=="-"){
      document.querySelector(".subBtn").disabled = true;
      disableOpBtn();
    }



    if(typeof Number1==='number' && !isNaN(Number1)){
      document.querySelector(".dotBtn").disabled = false;
      document.querySelector(".equalBtn").disabled = true;
      document.querySelector(".subBtn").disabled = false;
    
      enableOpBtn();

      if(charArr.toString().includes(".")){
        document.querySelector(".dotBtn").disabled = true;
     ``} 
    }

    if(typeof Number2==='number' && !isNaN(Number2)){
      disableOpBtn();
      document.querySelector(".equalBtn").disabled = false;
      document.querySelector(".dotBtn").disabled = false;
      document.querySelector(".subBtn").disabled = true;
    }

    if(charArr.slice(lengthToCut).includes(".")){
      document.querySelector(".dotBtn").disabled = true;
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
  } 
 

  if (e.target.value == "+" || e.target.value == "x" || e.target.value == "/"){
    disableOpBtn();
  }


  /*
  if(e.target.value == "-" && charArr.slice(-2) == "--"){
    disableOpBtn();
  }*/

  // Do operations 
  if (e.target.value == "="){

    document.querySelector(".equalBtn").disabled = true;

    if(operator == "+"){
      let OpResult = Add(Number1,Number2);
      const paragraph = document. querySelector('p');
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
    }

    if(operator == "-"){
      let OpResult = Substract(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
      
    }
  
    if(operator == "/"){
      let OpResult = Divide(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
    }
    
    if(operator == "x"){
      let OpResult = Multiply(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
    }

    enableOpBtn()
    document.querySelector(".subBtn").disabled = false;
  }

  i++;
}))


// Function Block
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


function Add(Number1,Number2) {
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;
  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
    DigitMultiplier = num2Digits
    };

  let sum = Number(Math.round(Number1+Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return sum; 
}


function Substract(Number1,Number2){
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;
  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
     DigitMultiplier = num2Digits
    };

  let diff = Number(Math.round(Number1-Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return diff;
}

function Multiply(Number1,Number2) {
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;
  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
     DigitMultiplier = num2Digits
    };

  let product = Number(Math.round(Number1*Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier)
  return product;
}

function Divide(Number1,Number2) {
  let num1Digits = Number1.toString().split('').length;
  let num2Digits = Number2.toString().split('').length;
  let DigitMultiplier

  if(num1Digits>num2Digits){
    DigitMultiplier = num1Digits 
  } else{
     DigitMultiplier = num2Digits
    };

  let division = Number(Math.round(Number1/Number2+'e'+DigitMultiplier)+'e-'+DigitMultiplier);

  if(Number2 == 0){
    division = "Error";
  }

  return division;
}





  

