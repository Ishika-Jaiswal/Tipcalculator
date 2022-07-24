/* 
APP: Tip Calculator

These are the 3 functions 
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML.
These are all the DIV ID's 
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Getting global access to all inputs 
// bill input, tip input, number of people div, and per person total div
const bill = document.getElementById('billTotalInput')
const tip= document.getElementById('tipInput')
const num= document.getElementById('numberOfPeople')
const pp= document.getElementById('perPersonTotal')


// Getting number of people from number of people div
let numberOfPeople= Number(num.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // getting bill from user input & converting it into a number
  const billInput = Number(bill.value)

  // getting the tip from user & convert it into a percentage (divide by 100)
  const tipInput= Number(tip.value)/100

  // getting the total tip amount
  const tipAmt = billInput*tipInput

  // calculating the total (tip amount + bill)
  const total = billInput+tipAmt

  // calculating the per person total (total divided by number of people)
  const perPerson = total/numberOfPeople

  // updating the perPersonTotal on DOM & showing it to user
  pp.innerText=(`${perPerson.toFixed(2)}`)
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // incrementing the amount of people
  numberOfPeople+=1

  // updating the DOM with the new number of people
  num.innerText=numberOfPeople

  // calculating the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return

  if(numberOfPeople<=1){
    alert('Hey! You cannot have less than 1 person!!')
    return
  }
  
  // decrementing the amount of people
  numberOfPeople-=1

  // updating the DOM with the new number of people
  num.innerText=numberOfPeople

  // calculating the bill based on the new number of people
  calculateBill()
} 