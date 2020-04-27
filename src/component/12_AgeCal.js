import React, { Component } from 'react';

//hoc - higher order component
import { connect } from 'react-redux';

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
      <div>
          {/* <div>Age: <span>{this .state.age}</span></div>
          <button onClick={this.onAgeUp}>Age Up</button>
          <button onClick={this.onAgeDown}>Age Down</button> */}

          <div>Age: <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>

          <hr/>

          <div>History</div>
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
        history: store.reducerAge.history
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1}),
        onDelete: (id) => dispatch({type: "DEL_ITEM", key: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AgeCal);
