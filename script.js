let result = [];
let Number1;
let Number2;
let Operator;

// populating the display with the values
const inputBtn = document.querySelectorAll('input');

let i = 0;
let k = 0;
let inputArr = [];

inputBtn.forEach(input => input.addEventListener('click', (e) => {
  const paragraph = document. querySelector('p')

  if (e.target.value == "DEL"){
  
  } if (e.target.value == "AC") {
    


  } 
  
  
  else {
    inputArr[i] = e.target.value; 
    let charArr;
  paragraph.textContent = inputArr.join("");

console.log(inputArr)


  if(i>8){
    let slicedArray = inputArr.slice(i-8,i+1);
    paragraph.textContent = slicedArray.join("");
  }

let string = inputArr.toString();
  charArr =string.replace(/,/g, "")

  
  console.log(charArr);
 


// SOMETHING WORKS


Number1 = parseInt(charArr);
console.log(Number1)
let lengthToCut = Number1.toString().length+1;
console.log(lengthToCut)


Number2 = parseInt(charArr.slice(lengthToCut));   

  if(charArr.includes("+")) {

  Operator = "+"

  }

  if(charArr.includes("/")) {

    Operator = "/"
  
    }


    if(charArr.includes("x")) {

      Operator = "x"
    
      }


  if(charArr.includes("-")) {

    Operator = "-"
  
    }


    
  console.log(Number1);
  console.log(Operator);
  console.log(Number2)



  console.log(typeof Number1);
  console.log(typeof Operator);
  console.log(typeof Number2)
  }

  //// 

  if (e.target.value == "="){


    if(Operator == "+"){

    let HEL = Add(Number1,Number2);
    const paragraph = document. querySelector('p')
    paragraph.textContent = HEL;
  console.log(HEL)
    }


    if(Operator == "-"){

      let HEL = Substract(Number1,Number2);
      const paragraph = document. querySelector('p')
      paragraph.textContent = HEL;
    console.log(HEL)
      }

      
      if(Operator == "/"){

        let HEL = Divide(Number1,Number2);
        const paragraph = document. querySelector('p')
        paragraph.textContent = HEL;
      console.log(HEL)
        }

        
        if(Operator == "x"){

          let HEL = Multiply(Number1,Number2);
          const paragraph = document. querySelector('p')
          paragraph.textContent = HEL;
        console.log(HEL)
          }
      

  }


  







  i++;
}))










function Add(Number1,Number2)
{
    return Number1+Number2;
}

function Substract(Number1,Number2)
{
    return Number1-Number2;
}

function Multiply(Number1,Number2)
{
    return Number1*Number2;
}

function Divide(Number1,Number2)
{
    return Number1/Number2;
}





  




// let a;
// let b;
// function Add(a,b)
// {
//     return a+b;
// }

// function Substract(a,b)
// {
//     return a-b;
// }


// function Multiply(a,b)
// {
//     return a*b;
// }

// function Divide(a,b)
// {
//     return a/b;
// }

// function Power(a,b)
// {
//     return a**b;
// }

// function factorial(a,b)
// {
//     return a+b;
// }

// console.log(Add(5,3))

// function operate(num1, num2, operator)
// {
//    if(operator == '+'){

// console.log("OK")
//       return Add(num1, num2) 
//    } else if(operator == "-"){
//        return Substract(num1,num2)
//     } else if(operator == "/"){
//        return Divide(num1,num2)
//     } else if(operator == "*"){
//        return Multiply(num1,num2)
//     } else if(operator == "^"){
//         return Power(num1,num2)
//     }


// }

// console.log(operate(1,2,"^"))
// */
