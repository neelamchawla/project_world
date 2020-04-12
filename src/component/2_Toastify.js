import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({closeToast}) => {
  return (
    <>
      Something Went Wrong
      <button onClick={closeToast}>X</button>
    </>
  )
}

toast.configure()

function Toastify (){
// const notify = () => toast("Basic Notification!");
const notify = () => {
toast("TOP_LEFT Notification!", {position: toast.POSITION.TOP_LEFT});
toast.success("TOP_CENTER success!", {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 8000
});
toast.info("TOP_RIGHT info!", {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: false
});
toast.warn(<CustomToast />, {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: false
});
toast.error("BOTTOM_CENTER error!", {position: toast.POSITION.BOTTOM_CENTER});
toast("BOTTOM_RIGHT Notification!", {position: toast.POSITION.BOTTOM_RIGHT});
}
return (
  <div className="toastify">
    <button onClick={notify}>Notify !</button>
  </div>
  )
}

  // ===========================================


// class Toastify extends Component {
//     notify = () => toast("Wow so easy !");
 
//     render(){
//       return (
//         <div className="toastify">
//           <button onClick={this.notify}>Notify !</button>
//           <ToastContainer />
//         </div>
//       );
//     }
//   }

// ===========================================

  // toast.configure()

  // toast.configure({
  //   autoClose: 8000,
  //   draggable: false
  // });

 
  // const Toastify = () => {
  //   const notify = () => toast("Wow so easy !");
    
  //   return <button onClick={notify}>Notify !</button>;
  // }


// ===========================================


  // class Toastify extends Component {
  //   notifyA = () => toast('Wow so easy !', {containerId: 'A'});
  //   notifyB = () => toast('Wow so easy !', {containerId: 'B'});
 
  //   render(){
  //     return (
  //       <div>
  //           <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_LEFT} />
  //           <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
     
  //           <button onClick={this.notifyA}>Notify A !</button>
  //           <button onClick={this.notifyB}>Notify B !</button>          
  //       </div>
  //     );
  //   }
  // }

// ===========================================

// class Toastify extends Component {
//   closeAfter15 = () => toast("YOLO", { autoClose: 15000 });

//   closeAfter7 = () => toast("7 Kingdoms", { autoClose: 7000 });

//   render(){
//     return (
//       <div>
//         <button onClick={this.closeAfter15}>Close after 15 seconds</button>
//         <button onClick={this.closeAfter7}>Close after 7 seconds</button>
//         <ToastContainer autoClose={8000} />
//       </div>
//     );
//   }
// }
  

// const Msg = ({ closeToast }) => (
//   <div>
//     Lorem ipsum dolor
//     <button>Retry</button>
//     <button onClick={closeToast}>Close</button>
//   </div>
// )
 
// const Toastify = () => (
//   <div className="toastify">
//     <button onClick={() => toast(<Msg />)}>Hello 😀</button>
//     <ToastContainer />
//   </div>
// )

export default Toastify
