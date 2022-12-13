"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b 2 - 4 * a * c;

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b + Math.sqrt(d)) / (2 * a);
    
    arr = [x1,x2]
  } else if (d == 0) {
    let x1 = -b / (2 * a);
    arr = [x1]
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  }
  if (isNaN(contribution)) {
    return false;
  }
  if (isNaN(amount)) {
    return false;
  }
  if (isNaN(countMonths)) {
    return false;
  }
  let bodyCredit = 0;

  let newPesent = percent / 100 / 12;
  if (contribution) {
    bodyCredit = amount - contribution;
  } else {
    bodyCredit = amount;
  }

  let monthlyPayment = bodyCredit * (newPesent + newPesent / ((1 + newPesent) countMonths - 1));
  let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}
  