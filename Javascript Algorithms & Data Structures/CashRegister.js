function checkCashRegister(price, cash, cid) {
  let change = cash - price;


  let returnObj = {
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

  let amounts = [];
  cid.forEach((element) => {
    amounts.push(element[1])
  });
  let totalInRegister = amounts.reduce((sum, cur) => {
    return sum + cur;
  });

  totalInRegister += .00001;

  if(totalInRegister < change){
    returnObj.status = "INSUFFICIENT_FUNDS";
    returnObj.change = [];
    return returnObj;
  }

  if(totalInRegister - change < 0.005)
    returnObj.status = "CLOSED";

  for(let i = cid.length - 1; i >= 0; i--){
    if(cid[i][0] == "ONE HUNDRED"){
      while(cid[i][1] > 0){
        if(change < 100)
          break;
        change -= 100;
        cid[i][1] -= 100;
        returnObj.change.forEach((element) => {
          if(element.includes("ONE HUNDRED"))
            element[1] += 100;
        });
      }
    }
    if(cid[i][0] == "TWENTY"){
      while(cid[i][1] > 0){
        if(change < 20)
          break;
        change -= 20;
        cid[i][1] -= 20;
        returnObj.change.forEach((element) => {
          if(element.includes("TWENTY"))
            element[1] += 20;
        });
      }
    }
    if(cid[i][0] == "TEN"){
      while(cid[i][1] > 0){
        if(change < 10)
          break;
        change -= 10;
        cid[i][1] -= 10;
        returnObj.change.forEach((element) => {
          if(element.includes("TEN"))
            element[1] += 10;
        });
      }
    }
    if(cid[i][0] == "FIVE"){
      while(cid[i][1] > 0){
        if(change < 5)
          break;
        change -= 5;
        cid[i][1] -= 5;
        returnObj.change.forEach((element) => {
          if(element.includes("FIVE"))
            element[1] += 5;
        });
      }
    }
    if(cid[i][0] == "ONE"){
      while(cid[i][1] > 0){
        if(change < 1)
          break;
        change -= 1;
        cid[i][1] -= 1;
        returnObj.change.forEach((element) => {
          if(element.includes("ONE"))
            element[1] += 1;
        });
      }
    }
    if(cid[i][0] == "QUARTER"){
      while(cid[i][1] > 0){
        if(change < .25)
          break;
        change -= .25;
        cid[i][1] -= .25;
        returnObj.change.forEach((element) => {
          if(element.includes("QUARTER"))
            element[1] += .25;
        });
      }
    }
    if(cid[i][0] == "DIME"){
      while(cid[i][1] > 0){
        if(change < .10)
          break;
        change -= .10;
        cid[i][1] -= .10;
        returnObj.change.forEach((element) => {
          if(element.includes("DIME"))
            element[1] += .10;
        });
      }
    }
    if(cid[i][0] == "NICKEL"){
      while(cid[i][1] > 0){
        if(change < .05)
          break;
        change -= .05;
        cid[i][1] -= .05;
        returnObj.change.forEach((element) => {
          if(element.includes("NICKEL"))
            element[1] += .05;
        });
      }
    }
    if(cid[i][0] == "PENNY"){
      while(cid[i][1] > 0){
        if(change < .005){
          break;
        }
        change -= .01;
        cid[i][1] -= .01;
        returnObj.change.forEach((element) => {
          if(element.includes("PENNY"))
            element[1] += .01;
        });
      }
    } 
  }
  

  //filter out any 0 amounts from amountReturned
  if(returnObj.status == "OPEN"){
    returnObj.change = returnObj.change.filter((element) => {
      if(element[1] > 0)
        return true;
    });
  }

  if(returnObj.status == "CLOSED"){
    returnObj.change = returnObj.change.reverse();
    returnObj.change[0][1] = parseFloat(returnObj.change[0][1].toFixed(1));
  }
  
  if(change > 0.005){
    returnObj.status = "INSUFFICIENT_FUNDS";
    returnObj.change = [];
  }

  console.log(returnObj);
  console.log("------")
  return returnObj;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])