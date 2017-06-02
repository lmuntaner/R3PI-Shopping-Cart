import React from 'react';

import calculatePrice from '../../utils/calculatePrice';

export default ({ item }) => <span>{ `CH ${calculatePrice(item)}` }</span>
