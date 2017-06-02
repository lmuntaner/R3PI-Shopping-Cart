import React from 'react';

import calculatePrice from '../../utils/calculatePrice';

const calculateTotal = (items) =>
  items.reduce((acc, item) => acc + calculatePrice(item), 0)

export default ({ items }) =>
  <span>{ `CH ${Math.round(calculateTotal(items) * 100) / 100}` }</span>
