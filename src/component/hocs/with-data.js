import React, { Component } from 'react';

// const withData = (WrappedComponent, dataSource) => {

// can use dataSource as props
const withData = (WrappedComponent) => {
  class WithData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: []
      }
    }
    
    componentDidMount() {
      // fetch(dataSource)
      fetch(this.props.dataSource)
      .then(response => response.json())
      .then(data => this.setState({data: data.slice(0,4)}
      ));
    }

    render () {
      // add this.props
      const { ...otherProps } = this.props
      return (
          <WrappedComponent
          data={this.state.data}
          // remove this.props
          {...otherProps}
          />
        );
    }
  }
  return WithData;
};

export default withData;
