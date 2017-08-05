//possible approach to keeping track of calculations:

// let displayArray = []
// let holdArray = []

let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
let equal = document.getElementById('equal')
let decimal = document.getElementById('decimal')
let clear = document.querySelector('.clear')
let buttons = document.querySelectorAll('.button')
let display = document.querySelector('.display')
let displayAnswer = display.querySelector('h1')
let sqrt = document.querySelector('.sqrt')
let modulo = document.querySelector('.modulo')

//clear the input on pressing clear(C):
clear.addEventListener("click", function(){
  output = ""
  display.textContent = 0
})

let output = ""
for (var i = 0; i < buttons.length; i++) {
  let value = buttons[i].id
  let className = buttons[i].className
  buttons[i].addEventListener('click', function(){
    //each time someone presses a button it adds it to output
    output += value
    //display the concatenated value of output
    display.textContent = output
  })
}

// how to get multiple numbers and/or operators to show?
equal.addEventListener("click", function(){
  // console.log(output)
  let result = eval(output).toFixed(8)
  // console.log(result)
  display.textContent = result
})

//perform the square root calculation:

sqrt.addEventListener("click", function(){
  let result = Math.sqrt(output)
  console.log(result)
  display.textContent = result
})

//attempting modulo:

modulo.addEventListener("click", function(){
  console.log(output)
  result %=express
  //same as result = result % expression
  console.log(result)
  display.textContent = result
})
