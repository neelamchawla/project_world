import React, { useState } from 'react';

import Card from '../hooks/card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Qwerty');
  const [address, setAddress] = useState('Amsterdam');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Asdfgh')}>Set Different Name</button>
      <button onClick={() => setAddress('Canada')}>Set Address</button>
    </Card>
  );
};

// export class StateClassComponent extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: 'Qwerty',
//       address: 'Canada'
//     };
//   }

//   render() {
//     return (
//       <Card>
//         <h1> {this.state.name} </h1>
//         <button onClick={this.setState({ name: 'Asdfgh' })}>
//           Set Name to Andrei
//         </button>
//         <button onClick={this.setState({ address: 'Amsterdam' })}>
//           Set Address
//         </button>
//       </Card>
//     );
//   }
// }

export default UseStateExample;