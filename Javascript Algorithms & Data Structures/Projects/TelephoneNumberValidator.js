const regex = /^\(\d{3}\) *\d{3}-\d{4}|^1 \d{3}-\d{3}-\d{4}|^\d{10}$|^1 *\(\d{3}\) *\d{3}-\d{4}|^\d{3}-\d{3}-\d{4}|^1 \d{3} \d{3} \d{4}/;

function telephoneCheck(str) {
  return regex.test(str);
}

telephoneCheck("555-555-5555");