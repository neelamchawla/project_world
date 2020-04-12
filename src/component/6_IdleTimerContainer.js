import React, { useRef } from 'react'
import IdleTimer from 'react-idle-timer'

const IdleTimerContainer = () => {
    const IdleTimerRef = useRef(null)

    const onIdle = () => {
        console.log("User Is Idle")
        // alert("User Is Idle")
      }
      return (
      <div className="idletimer">
        <IdleTimer
        ref={IdleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
        />
        <h2>Hello Admin</h2>
      </div>
  )
}


// ============= log in / auto log out ================
// import {useState} from 'react'
// import Modal from 'react-modal'

// Modal.setAppElement('#root')

// const IdleTimerContainer = () => {

//     const [IsLoggedIn, setIsLoggedIn] = useState(true)
//     const [modalIsOpen, setModalIsOpen] = useState(false)
//     const IdleTimerRef = useRef(null)
//     const SessionTimeOutRef = useRef(null)

//     const onIdle = () => {
//         console.log("User Is Idle")
//         // alert("User Is Idle")
//         setModalIsOpen(true)
        
//         //session time out
//         SessionTimeOutRef.current = setTimeout(logOut, 5000)
//     }

//     const logOut = () => {
//         setModalIsOpen(false)
//         setIsLoggedIn(false)

//         //session time out
//         clearTimeout(SessionTimeOutRef.current)
//         console.log("User is Logged Out")
//     }

//     const stayActive = () => {
//         setModalIsOpen(false)
//         // setIsLoggedIn(true)

//         //session time out
//         clearTimeout(SessionTimeOutRef.current)
//         console.log("User is active")
//     }

//   return (
//     <>
//     <div>
//         {
//             IsLoggedIn ? <h2>Hello Admin</h2> : <h2>Hello Guest</h2>
//         }
//     </div>
//     <Modal isOpen={modalIsOpen}>
//         <h2>You've been idle for a while</h2>
//         <p>You will be logged out soon</p>
//         <button onClick={logOut}>Log Out</button>
//         <button onClick={stayActive}>Keep Logged In</button>
//     </Modal>
//       <IdleTimer
//       ref={IdleTimerRef}
//       timeout={5 * 1000}
//       onIdle={onIdle}
//       />
//     </>
//   )
// }

export default IdleTimerContainer
