const getMaxValue = require('./getMaxValue')
const isEvenNumber = require('./isEvenNumber')
const factorial = require('./factorial')

module.exports = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  }