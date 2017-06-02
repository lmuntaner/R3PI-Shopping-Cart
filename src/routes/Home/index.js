import React from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import ItemsList from '../../components/ItemsList';

const Home = ({ items }) =>
  <Container>
    <ItemsList items={ items }/>
  </Container>

const mapStateToProps = (state) => ({
  items: Object.values(state.tshirts)
});

export default connect(mapStateToProps)(Home)
