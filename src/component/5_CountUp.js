import React from 'react'
import CountUp from 'react-countup';

// const CountingUp = () => {
//   return (
//    <>
//     <h1>
//         <CountUp
//             start={50}
//             end={200}
//             duration={15}
//             prefix='$'
//             decimals={2}
//         /><br/>
//         <CountUp
//             start={50}
//             end={200}
//             duration={15}
//             suffix=' USD'
//             decimals={2}
//         />
//       </h1>
//     </>
//   )
// }

// ================= Advanced topic ==================

import {useCountUp} from 'react-countup';
// importing hooks

import Counter from './Counter';

function CountingUp () {

    const {countUp, start, pauseResume, reset, update}= useCountUp({duration: 5, end: 10000, startOnMount: false})

      return (
        <div className="countup">
        <h1>
            {countUp}
            <br/>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={() => update(2000)}>Update</button>
        </h1>
        <Counter />
        </div>
      )
}
// ================= Advanced topic ==================
// const CountingUp = () => {
//   return (
//    <>
//       <CountUp
//         start={-875.039}
//         end={160527.012}
//         duration={2.75}
//         separator=" "
//         decimals={4}
//         decimal=","
//         prefix="EUR "
//         suffix=" left"
//         onEnd={() => console.log('Ended! 👏')}
//         onStart={() => console.log('Started! 💨')}
//         >
//         {({ countUpRef, start }) => (
//             <div>
//             <span ref={countUpRef} />
//             <button onClick={start}>Start</button>
//             </div>
//         )}
//       </CountUp>
//     </>
//   )
// }

export default CountingUp
