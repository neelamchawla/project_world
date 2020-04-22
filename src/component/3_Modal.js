import React from 'react';
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root')
// to remove the error, showing 
// =========== normal modal without close btn ===========


// function Modals () {
//   return (
//     <div className="App">
//       <Modal isOpen={true}>
//         <h2>Modal Title</h2>
//         <p>Modal Body</p>
//       </Modal>
//     </div>
//   );
// }

// ============== close btn in modal ====================


// function Modals () {
//     //useSet hooks formate
//     const [modalIsOpen, setmodalIsOpen]= React.useState(false)
//     return (
//       <div className="App">
//         <button onClick={() => setmodalIsOpen(true)}>
//         Open Modal</button>
//         <Modal isOpen={modalIsOpen}>
//           <h2>Modal Title</h2>
//           <p>Modal Body</p>
//           <button onClick={() => setmodalIsOpen(false)}>Close</button>
//         </Modal>
//       </div>
//     );
//   }

// ============== esc/click close ====================

  function Modals () {
    //useSet hooks formate
    const [modalIsOpen, setmodalIsOpen]= React.useState(false)
    return (
      <div className="App">
        <button onClick={() => setmodalIsOpen(true)}>
        Open Modal</button>
        {/* <Modal isOpen={modalIsOpen} onRequestClose={()=> setmodalIsOpen(false)}> */}
        {/* dnt want to over lay click, add shouldCloseOnOverlayClick as false */}
        <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=> setmodalIsOpen(false)}>
          <h2>Modal Title</h2>
          <p>Modal Body</p>
          <button onClick={() => setmodalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    );
  }


// ============== STYLING ====================


  // function Modals () {
  //   //useSet hooks formate
  //   const [modalIsOpen, setmodalIsOpen]= React.useState(false)
  //   return (
  //     <div className="modal">
  //       <button onClick={() => setmodalIsOpen(true)}>
  //       Open Modal</button>
  //       <Modal 
  //       isOpen={modalIsOpen}
  //       shouldCloseOnOverlayClick={true}
  //       onRequestClose={()=> setmodalIsOpen(false)}
  //       style={
  //           {
  //               overlay:{
  //                   backgroundColor: '#ffc0cbbf'
  //               },
  //               content:{
  //                   color: '#ffffffb3',
  //                   background: '#5ac8fa'
  //               }
  //           }
  //       }
  //       >
  //         <h2>Modal Title</h2>
  //         <p>Modal Body</p>
  //         <button onClick={() => setmodalIsOpen(false)}>Close</button>
  //       </Modal>
  //     </div>
  //   );
  // }

export default Modals