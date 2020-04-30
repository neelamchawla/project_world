import React, {useState} from 'react'
import { ChromePicker } from "react-color";

import styled from 'styled-components';

const Container = styled.div`
  color: blue;
  font-size: 28px;
  width: 43vw;
  border: ${({ isActive }) =>
  isActive ? '5px ridge green'
           : '3px dotted red'
}
`;


const textStyle = {
  color: 'red',
  fontSize: '24px'
}

const ColorPicker = () => {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setshowColorPicker] = useState(false)


  return (
    <div className="colorpicker">
      <button onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)}>
      {showColorPicker ? 'Close' : 'Pick' }</button>
        {
          showColorPicker && <ChromePicker 
          color={color}
          onChange={updateColor => setColor(updateColor.hex)}/>
        }
      <h2>You Picked {color}</h2>

      <center>
      <div className="box">
          <div style={textStyle}>CSS using different approach</div>
      </div>
        <br/>
      <Container isActive={true}>
        CSS using styled component
      </Container>
      </center>
    </div>
  );
}

export default ColorPicker
