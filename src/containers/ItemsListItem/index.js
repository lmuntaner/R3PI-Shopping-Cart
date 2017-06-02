import { GridTile } from 'material-ui';
import React from 'react';
import { connect } from 'react-redux';

import AddToCart from '../../components/AddToCart';
import { addToCart } from '../../store/actions/cart'

const Item = ({ item, onAddToCart }) =>
  <GridTile
    key={ item.id }
    title={ item.name }
    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
    subtitle={
      <span>
        <span>{ `CH ${item.price}` }</span>
        { item.discount && <span>{ ` - ${item.discount.text}` }</span> }
      </span>
    }
    actionIcon={ <AddToCart handleAddToCart={ onAddToCart }/> }
  >
    <img src={ item.imageUrl } alt={ item.name }/>
  </GridTile>

const mapDispatchToProps = (dispatch, props) => ({
  onAddToCart: () => dispatch(addToCart(props.item.id))
});

export default connect(undefined, mapDispatchToProps)(Item);
