import React from 'react'
import { connect } from 'react-redux';

import { Card } from './sagaProp/card/card.component';


const SagaProp  = ({ increment, decrement, value }) => (
    <Card>
      {value}
      <button onClick={increment}>Add 1</button>
      <button onClick={decrement}>Minus 1</button>
    </Card>
  );
  
  const mapStateToProps = store => ({
    value: store.rootReducerSaga.app.value
  });
  
  const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SagaProp);
