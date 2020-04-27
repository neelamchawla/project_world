import React, { Component } from 'react';

//hoc - higher order component
import { connect } from 'react-redux';


class SagaAge extends Component {
    render() {
      return (
        <div className="App">
          <div className="Age-label">
            your age: <span>{this.props.age}</span>
          </div>
          <button onClick={this.props.onAgeUp}>Age UP</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
        </div>
      );
    }
  }

// multiple reducer
const mapStateToProps = (store) => {
    return {
        age: store.reducerSaga.age
    }
};

//middleware think
const mapDispachToProps = dispatch => {
    return {
      onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
      onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(SagaAge);
