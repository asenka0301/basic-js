const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  length : 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    const valueToAdd = value !== 'undefined' ? value : '';
    this.chain.push(`( ${String(valueToAdd)} )`);
    this.length += 1;

    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number'
      || position - 1 < 0
      || position - 1 > this.length - 1
      ) {
      this.chain = [];
      this.length = 0;
      throw Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
      this.length -= 1;
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finalChain = this.chain.join('~~');
    this.chain = [];
    this.length = 0;
    return finalChain;
  }
};

module.exports = {
  chainMaker
};
