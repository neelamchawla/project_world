import React, { Component } from 'react'
import { connect } from 'react-redux'

class MultipleRedux extends Component {
  render() {
    return (
      <div className="container">
          <div className="col">
            <div>
                <span>A:</span>
                <span>{this.props.a}</span><br/>
                {/* <button onClick={this.props.updateA}>Update A</button> */}
                
                {/* to get the value of A in side reducerB we need to pass a payload ie value */}
                <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
            </div>
          </div>
          
          <div className="col">
            <div>
                <span>B:</span>
                <span>{this.props.b}</span><br/>
                {/* <button onClick={this.props.updateB}>Update B</button> */}
                <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
            </div>
          </div>

      </div>
    )
  }
}

const mapStateToProps = (store) => {
    return{
        // a: store.a,
        // b: store.b
        
        // after combining the reducers
        a: store.rA.a,
        b: store.rB.b
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateA: () => dispatch({type: 'UPDATE_A'}),
        // updateB: () => dispatch({type: 'UPDATE_B'})
        
        //to get access to the a and b values as a payload values 
        updateA: (b) => dispatch({type: 'UPDATE_A', b:b}),
        updateB: (a) => dispatch({type: 'UPDATE_B', a:a})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultipleRedux);
