import React from 'react'

const Rainbow = (WrappedComponent) => {
  
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red' ];

const randomColor = colors[Math.floor(Math.random() * 6 )];

const className = randomColor + '-text';

return (props) => {
    return (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  )
}
}

export default Rainbow
