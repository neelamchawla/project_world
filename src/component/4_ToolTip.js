import React from 'react'
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css'

const ToolTip = () => {
  return (
    <div className="tooltip">
      <Tooltip
            title='Basic Tooltip' 
            position={"left-start"}
            theme={"dark"}
            // theme={"light"}
            arrow={true}
            delay={1000}
            >
          <button>Hover</button>
      </Tooltip>
    </div>
  )
}

// =============== style wth html tag =================

// const ToolTip = () => {
//     return (
//       <>
//         <div style={{paddingBottom: '20px'}}>
//         <Tooltip html={<span style={{color: 'yellow'}}>Colored</span>}>
//             <button>Hover</button>
//         </Tooltip>
//         </div>
//       </>
//     )
//   }


// =============== style wth react tag =================

// const ColoredToolTip = () =>{
// return <span style={{ color: "red" }}>Colored ToolTip</span>
// }

// const ToolTip = () => {
//     return (
//       <>
//         <div style={{paddingBottom: '20px'}}>
//         <Tooltip html={<ColoredToolTip/>}>
//             <button>Hover</button>
//         </Tooltip>
//         </div>
//       </>
//     )
//   }


// =============== style wth react tag =================
//if error
// import {forwardRef} from 'react'

// const ColoredToolTip = () =>{
// return <span style={{ color: "red" }}>Colored ToolTip</span>
// }

// //if error
// // const CustomChild = forwardRef((props, ref) => {
// //     return (
// //         <div ref={ref}>
// //             <h3>Header</h3>
// //             <p>Paragraph</p>
// //         </div>
// //     )
// // })

// //if no error
// const CustomChild = props => {
//     return (
//         <div>
//             <h3>Header</h3>
//             <p>Paragraph</p>
//         </div>
//     )
// }

// const ToolTip = () => {
//     return (
//       <>
//         <div style={{paddingBottom: '20px'}}>
//         <Tooltip html={<ColoredToolTip/>}>
//             <CustomChild />
//             {/* //if error => TypeError: Cannot read property "ToolTip" of undefined, to fix this. Add "forwardRef" */}
//         </Tooltip>
//         </div>
//       </>
//     )
//   }

export default ToolTip
