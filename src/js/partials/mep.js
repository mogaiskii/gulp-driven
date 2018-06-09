'use strict';
const _ = require('underscore');

const listOfItems = ['item', 'item1', 'item2', 'item3', 'item4'];
module.exports = function() {
  _.each(listOfItems, console.log);
  console.log('mep');
};
