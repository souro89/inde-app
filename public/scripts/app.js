"use strict";

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (n) {
      return n * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
