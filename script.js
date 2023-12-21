let result = [];
let Number1;
let Number2;
let Operator;

// populating the display with the values
const inputBtn = document.querySelectorAll('input');

let i = 0;
let k = 0;
let inputArr = [];
document.querySelector(".dotBtn").disabled = true;

disableOpBtn()

inputBtn.forEach(input => input.addEventListener('click', (e) => {
  const paragraph = document.querySelector('p')

  if (e.target.value == "DEL"){
  
  } if (e.target.value == "AC") {

  } 
  

  
  else {

  enableOpBtn()

  inputArr[i] = e.target.value; 
  let charArr;
  paragraph.textContent = inputArr.join("");

  if(i>8){
    let slicedArray = inputArr.slice(i-8,i+1);
    paragraph.textContent = slicedArray.join("");
  }

  let string = inputArr.toString();
  charArr =string.replace(/,/g, "");

// Decimal places

Number1 = parseFloat(charArr);

let lengthToCut = Number1.toString().length+1;
Number2 = parseFloat(charArr.slice(lengthToCut));   

if(Number1 != NaN){
  document.querySelector(".dotBtn").disabled = false;

  if(charArr.toString().includes(".")){
  document.querySelector(".dotBtn").disabled = true;
} 



if(charArr.includes("+") ||charArr.includes("-") || charArr.includes("x") ||charArr.includes("/")  ){
  document.querySelector(".dotBtn").disabled = true;
  if(Number2 >= 0){
    document.querySelector(".dotBtn").disabled = false;
    
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

    

    if(Operator == "+"){
      let OpResult = Add(Number1,Number2);
      const paragraph = document. querySelector('p');
      paragraph.textContent = OpResult;
    }

    if(Operator == "-"){
      let OpResult = Substract(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
    }
  
    if(Operator == "/"){
      let OpResult = Divide(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;
    }
    
    if(Operator == "x"){
      let OpResult = Multiply(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = OpResult;  
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
    return Number1+Number2;
}

function Substract(Number1,Number2) {
    return Number1-Number2;
}

function Multiply(Number1,Number2) {
    return Number1*Number2;
}

function Divide(Number1,Number2) {
    return Number1/Number2;
}





  

