const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const ROT = 13;

function rot13(str) {
  let ret = "";
  let keys = rotateAlphabet();
  for(let i = 0; i < str.length; i++){
    if(keys[ALPHABET.indexOf(str[i])] == undefined){
      ret += str[i];
      continue;
    }
    ret += keys[ALPHABET.indexOf(str[i])]
  }
  return ret;
}

//create an array with ALPHABET shifted over ROT times
function rotateAlphabet(){
  let temp = [...ALPHABET]
  let rotation = ROT % temp.length;
  let pop = temp.splice(temp.length - rotation);
  temp.unshift(...pop);
  return temp;
}

rot13("SERR PBQR PNZC");