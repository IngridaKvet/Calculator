let result = [];
let Number1;
let Number2;
let Operator;
let currentValue = 0;
let i = 0;
let k = 0;
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

    // Getting Numbers
    Number1 = parseFloat(charArr);
    let lengthToCut = Number1.toString().length+1;
    Number2 = parseFloat(charArr.slice(lengthToCut));  

    // Decimal places
    if(Number1 >= 0){
    document.querySelector(".dotBtn").disabled = false;
    document.querySelector(".equalBtn").disabled = true;
   

      if(charArr.toString().includes(".")){
        document.querySelector(".dotBtn").disabled = true;
     } 

      if(charArr.includes("+") ||charArr.includes("-") || charArr.includes("x") ||charArr.includes("/")  ){
        document.querySelector(".dotBtn").disabled = true;
       
       if(Number2 >= 0){
        document.querySelector(".dotBtn").disabled = false;
        document.querySelector(".equalBtn").disabled = false;
       }
      }

    }

    if(Number2>=0){
      disableOpBtn()
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
 






  // Assign operator

  if (e.target.value == "+"){
    Operator = "+";
    disableOpBtn();

  }

  if (e.target.value == "/"){
    Operator = "/";
    disableOpBtn();
  }

  if (e.target.value == "-"){
    Operator = "-";
    disableOpBtn();
  }

  if (e.target.value == "x"){
    Operator = "x";
    disableOpBtn();
  } 


  // Do operations 
  if (e.target.value == "="){

    document.querySelector(".equalBtn").disabled = true;

    if(Operator == "+"){
      let OpResult = Add(Number1,Number2);
      const paragraph = document. querySelector('p');
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
    }

    if(Operator == "-"){
      let OpResult = Substract(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
      
    }
  
    if(Operator == "/"){
      let OpResult = Divide(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
    }
    
    if(Operator == "x"){
      let OpResult = Multiply(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
      currentValue = currentValue+OpResult;
      inputArr = [];
      inputArr[0] = OpResult;
    }

    enableOpBtn()
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





  

