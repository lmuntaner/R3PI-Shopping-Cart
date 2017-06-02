import { GridList } from 'material-ui';
import React from 'react'

import ListItem from '../../containers/ItemsListItem';

const styles = {
  root: {
    width: '600px',
    marginTop: '50px',
  }
}

export default ({ items }) =>
  <GridList
    cols={ 3 }
    style={ styles.root }
    cellHeight={ 200 }
  >
    {
      items.map(item => <ListItem key={ item.id } item={ item} />)
    }
  </GridList>;
