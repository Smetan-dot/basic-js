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
    this.chainArr.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if(typeof position === 'number' && Number.isInteger(position)) {
      if(position < 1 || position > this.getLength()) {
        this.chainArr.length = 0;
        throw new Error("You can't remove incorrect link!");
      }
      let index = position - 1;
      return this.chainArr.splice(index, 1);
    }
    this.chainArr.length = 0;
    throw new Error("You can't remove incorrect link!");
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    const result = this.chainArr.join('~~');
    this.chainArr.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
