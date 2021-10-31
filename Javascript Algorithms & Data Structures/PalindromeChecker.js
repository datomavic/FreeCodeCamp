function palindrome(str) {
  str = str.toLowerCase().match(/[^\W_]+/g).join("");
  let reverseString = "";
  for(let i = str.length - 1; i >= 0; i--){
    reverseString += str.charAt(i);
  }
  return reverseString == str;
}

palindrome("eye_");