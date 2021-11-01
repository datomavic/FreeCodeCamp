/*
 * FreeCodeCamp - Javascript Algorithms & Data Structures
 * 
 * ~ CashRegister.js ~
 * 
 * -Given a cash register with cash/coin amounts, a price of an item, and cash received,
 *  calculate how much of each cash type shall be returned 
 *  (Hundreds, Twentys, Quarters, Pennys, etc.)
 *  based on amounts existing in cash register.
 * 
 * -The main issue encountered when dealing with decimal amounts is
 *  precision loss. Throughout this code you will find mutiplication/division
 *  by 100. This will ensure that there is no precision loss when dealing with
 *  decimal cash amounts.
 */


// Test: checkCashRegister(price, cashGiven, currentCashRegister);
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let changeReturned = initializeChangeReturned(cid, change);

  // Loop through register slots. Decrement change and update register. 
  for(let i = cid.length - 1; i >= 0; i--)
    change = deduct(cid[i], change, changeReturned);

  // Revert changeReturned's dollar values to decimal format
  changeReturned.change.forEach( (element) =>{
      element[1] /= 100;
  });
  
  // Format changeReturned obj by changing status and/or removing empty amounts 
  formatChangeReturned(changeReturned, change);
  return changeReturned;
}


/******** HELPER FUNCTIONS *************/

//Helper function to get total amount in cash register
function getTotalInRegister(register){
  let totalInRegister = 0;
  register.forEach((element) => {
    totalInRegister += (element[1] * 100);
  });
  return totalInRegister / 100;
}

// Helper function to initialize a cash register object. 
function initializeChangeReturned(cid, change){
  /*
   * changeReturned is the changeReturned object we will return.
   * Object's key values are subject to change later on during calculation.
   * By default, 'status' will be "OPEN". 
  */
  let changeReturned = {
    status: "OPEN",
    change: [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0],
      ["ONE", 0], 
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0], 
      ["PENNY", 0], 
    ]
  };
  // If total in register is exactly equal to change to be given, register status will be CLOSED later.
  if(getTotalInRegister(cid) == change)
    changeReturned.status = "CLOSED";

  return changeReturned;
}

//Helper function which returns number-value of CID[0]'s string. 
function getDecrementer(str){
  switch(str){
      case 'ONE HUNDRED': 
        return 100;
      case 'TWENTY': 
        return 20;
      case 'TEN':
        return 10;
      case 'FIVE':
        return 5;
      case 'ONE':
        return 1;
      case 'QUARTER':
        return 0.25;
      case 'DIME':
        return 0.1;
      case 'NICKEL':
        return 0.05;
      case 'PENNY':
        return 0.01;
    }
}

/*
 * Helper function which loops through current register slot and
 * decrements change-to-be-given by slot's dollar amount until slot is empty.
 * Once/if slot is empty, return change-to-be-given. 
*/
function deduct(registerSlot, change, changeReturned){
    let decrementer = getDecrementer(registerSlot[0]);
    change = Math.round(change * 100);
    decrementer *= 100;
    registerSlot[1] *= 100;
    while(registerSlot[1] > 0){
      if(change < decrementer)
        break;
      change -= decrementer;
      registerSlot[1] -= decrementer;
      changeReturned.change.forEach((element) => {
        if(element.includes(registerSlot[0]))
          element[1] += decrementer;
      });
    }
    change /= 100;
    decrementer /= 100;
    registerSlot[1] /= 100;
    return change;
}

// Helper function to format changeReturned object
function formatChangeReturned(changeReturned, change){
  if(changeReturned.status == "OPEN"){
    changeReturned.change = changeReturned.change.filter((element) => {
      if(element[1] > 0) return true;
    });
  }
  if(changeReturned.status == "CLOSED")
    changeReturned.change = changeReturned.change.reverse();
  if(change > 0){
    changeReturned.status = "INSUFFICIENT_FUNDS";
    changeReturned.change = [];
  }
}