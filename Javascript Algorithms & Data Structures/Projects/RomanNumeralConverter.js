const romans = [
  "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM", // 100s
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC", // 10s
  "","I","II","III","IV","V","VI","VII","VIII","IX" // 1s
  ];
  
  function convertToRoman(num) {
    let digits = num.toString();
    let digArray = digits.split("");
    return getRomanOfDig(digArray);
  }
  
  function getRomanOfDig(arr){
    let ret = "";
    for(let i = 3; i > 0; i--){
      let temp = i - 1;
      let currentDig = arr.pop();
      //Number(currentDig) is the same as (+currentDig)
      //'+' is a unary plus, which converts something into int/number 
      //if it's not already.
      let cur = (Number(currentDig)) + (temp * 10);
      if(romans[cur] == undefined)
        ret = "" + ret;
      else
        ret = romans[cur] + ret;
    }
    let i = (Number(arr.join(""))) + 1;
    return new Array(i).join("M") + ret;
  }