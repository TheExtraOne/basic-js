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
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.ifDirectMachine = direction,
    this.Alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }
  encrypt(message, key) {
    if (!message || !key) {
    throw new Error('Incorrect arguments!');
    }
    let result = [];
    let j = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (this.Alphabet.includes(message[i])) {
        let origIndex = this.Alphabet.indexOf(message[i]);
        let keyIndex = 0;
        if (j < key.length) {
          keyIndex = this.Alphabet.indexOf(key[j]);
          j++;
        } else {
          j = 0;
          keyIndex = this.Alphabet.indexOf(key[j]);
          j++;
        }
        let newInex = origIndex + keyIndex;
        if (newInex > 25) {
          newInex = newInex - 26;
        }
        
        result.push(this.Alphabet[newInex]);
      } else {
        result.push(message[i]);
      }
    }
    if (!this.ifDirectMachine) {
      result = result.reverse();
    } 
    return result.join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = [];
    let j = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (this.Alphabet.includes(message[i])) {
        let origIndex = this.Alphabet.indexOf(message[i]);
        let keyIndex = 0;
        if (j < key.length) {
          keyIndex = this.Alphabet.indexOf(key[j]);
          j++;
        } else {
          j = 0;
          keyIndex = this.Alphabet.indexOf(key[j]);
          j++;
        }
        let newInex = 0;
        if (origIndex - keyIndex < 0) {
          newInex = origIndex + 26 - keyIndex;
        } else {
          newInex = origIndex - keyIndex;
        }
        
        result.push(this.Alphabet[newInex]);
      } else {
        result.push(message[i]);
      }
    }
    if (!this.ifDirectMachine) {
      result = result.reverse();
    } 
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
