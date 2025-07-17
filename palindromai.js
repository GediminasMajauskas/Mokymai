function palindromai(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  const reverseStr = cleanStr.split('').reverse().join('');
  return cleanStr === reverseStr;
}

module.exports = palindromai;