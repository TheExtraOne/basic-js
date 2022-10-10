const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [], 
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value === '') {
      this.chainArr.push(`( )`);
    } else {
      value = value + '';
      this.chainArr.push(`( ${value} )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    if (isNaN(position) || !(this.chainArr[position - 1])) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainArr.splice(position - 1, 1);
      return chainMaker;
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
