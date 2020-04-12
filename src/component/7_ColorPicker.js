import React, {useState} from 'react'
import { ChromePicker } from "react-color";

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
    </div>
  );
}

export default ColorPicker
