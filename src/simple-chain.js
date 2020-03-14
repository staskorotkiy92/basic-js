const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.chain.push(`( ${'' + value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (isNaN(position) || Math.ceil(position) !== position || position < 1 || position > this.chain.length) throw 'Error';
      this.chain.splice(position - 1, 1);
      return this;
    }
  catch {
      this.chain = [];
      throw 'Error';
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
