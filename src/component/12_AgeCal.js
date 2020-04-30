import React, { Component } from 'react';

import logo from '../extra/logo.svg';

//hoc - higher order component
import { connect } from 'react-redux';

// middleware thunk
import * as actionCreator from './store/actions/actions';


class AgeCal extends Component {

    // state = {
    //     age: 21
    // }

    // onAgeUp = () => {
    //     this.setState({
    //         ...this.state,
    //         age: ++this.state.age
    //     })
    // }

    // onAgeDown = () => {
    //     this.setState({
    //         ...this.state,
    //         age: --this.state.age
    //     })
    // }

  render() {
    return (
      <div className="ageCal">
          {/* <div>Age: <span>{this .state.age}</span></div>
          <button onClick={this.onAgeUp}>Age Up</button>
          <button onClick={this.onAgeDown}>Age Down</button> */}

          <div>Age: <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
      
          <hr/>

          <div>History</div>
          <p>Click on the number you want to DELETE from the list below</p>
          {this.props.loading && <img src={logo} className="App-logo" alt="logo" width="280" />}
          <div>
              <ul>
                  {
                    this.props.history.map(
                          res => (
                             <li
                             key={res.id}
                             className="historyItem"
                             onClick={() => this.props.onDelete(res.id)}
                             >
                                { res.age }
                             </li>
                            )
                        )
                  }
              </ul>
          </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//     return {
//         age: state.age,
//         history: state.history
//     }
// };

// multiple reducer
const mapStateToProps = (store) => {
    return {
        age: store.reducerAge.age,
        history: store.reducerAge.history,
        loading: store.reducerAge.loading
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
//         onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
//         onDelete: (id) => dispatch({type: "DEL_ITEM", key: id})
//     }
// };


//middleware think
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch(actionCreator.ageUp(1)),
        onAgeDown: () => dispatch(actionCreator.ageDown(1)),
        onDelete: (id) => dispatch({type: "DEL_ITEM", key: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeCal);
