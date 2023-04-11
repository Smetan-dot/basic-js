const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.reverseFlag = !isDirect;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let keyUp = key.toUpperCase();
    let messageUp = message.toUpperCase();

    let k = key.length;
    let m = message.length;

    let keyNumbers = [];
    let messageNumbers = [];

    for(let i = 0; i < m; i++) {
      if(!alphabet.includes(messageUp[i])) messageNumbers.push(messageUp[i]);
      if(alphabet.includes(messageUp[i])) {
        let index = 0;
        index = alphabet.indexOf(messageUp[i]);
        messageNumbers.push(index);
      }
    }

    for(let i = 0; i < k; i++) {
      let index = 0;
      index = alphabet.indexOf(keyUp[i]);
      keyNumbers.push(index);
    }

    let result = [];
    let count = 0;

    for(let i = 0; i < messageNumbers.length; i++) {
      if(typeof messageNumbers[i] === 'number') {
        if(count >= k) count = 0;
        let index = 0;
        index = (messageNumbers[i] + keyNumbers[count]) % 26;
        result.push(alphabet[index]);
        count++;
      }
      else result.push(messageNumbers[i]);
    }

    if(this.reverseFlag === true) return result.reverse().join('');
    return result.join('');
  }
  decrypt(encMessage, key) {
    if(encMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let keyUp = key.toUpperCase();
    let encMessageUp = encMessage.toUpperCase();

    let k = key.length;
    let m = encMessage.length;

    let keyNumbers = [];
    let messageNumbers = [];

    for(let i = 0; i < m; i++) {
      if(!alphabet.includes(encMessageUp[i])) messageNumbers.push(encMessageUp[i]);
      if(alphabet.includes(encMessageUp[i])) {
        let index = 0;
        index = alphabet.indexOf(encMessageUp[i]);
        messageNumbers.push(index);
      }
    }

    for(let i = 0; i < k; i++) {
      let index = 0;
      index = alphabet.indexOf(keyUp[i]);
      keyNumbers.push(index);
    }

    let result = [];
    let count = 0;

    for(let i = 0; i < messageNumbers.length; i++) {
      if(typeof messageNumbers[i] === 'number') {
        if(count >= k) count = 0;
        let index = 0;
        index = messageNumbers[i] - keyNumbers[count];
        if(index < 0) index = index + 26;
        index = index % 26;
        result.push(alphabet[index]);
        count++;
      }
      else result.push(messageNumbers[i]);
    }

    if(this.reverseFlag === true) return result.reverse().join('');
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
