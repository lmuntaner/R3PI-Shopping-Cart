import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import FinalPrice from '../../containers/FinalPrice';
import TotalPrice from '../../containers/TotalPrice';

const styles = {
  root: {
    marginTop: '50px',
    width: '800px',
  },
  footer: {
    backgroundColor: '#eee',
    verticalAlign: 'middle',
  },
  footerTitle: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  footerTotal: {
    fontWeight: 'bold',
  }
}

export default ({ items }) =>
  <Table wrapperStyle={ styles.root } selectable={ false }>
    <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Price per unit</TableHeaderColumn>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
        <TableHeaderColumn>Discount</TableHeaderColumn>
        <TableHeaderColumn>Final Price</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={ false }>
      {
        items.map(item =>
          <TableRow key={ item.id }>
            <TableRowColumn>{ item.name }</TableRowColumn>
            <TableRowColumn>{ `CH ${item.price}` }</TableRowColumn>
            <TableRowColumn>{ item.quantity }</TableRowColumn>
            <TableRowColumn>{ item.discount && item.discount.text }</TableRowColumn>
            <TableRowColumn><FinalPrice item={ item } /></TableRowColumn>
          </TableRow>
        )
      }
    </TableBody>
    <TableFooter
      adjustForCheckbox={ false }
    >
      <TableRow style={ styles.footer }>
        <TableRowColumn colSpan="4" style={ styles.footerTitle }>
          Total Price
        </TableRowColumn>
        <TableRowColumn style={ styles.footerTotal }><TotalPrice items={ items } /></TableRowColumn>
      </TableRow>
    </TableFooter>
  </Table>
