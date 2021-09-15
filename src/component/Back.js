import React from 'react'
import img1 from '../backspace.PNG'

export default function Back(props) {
    const { text, setText } = props;
    const disp = () => {
        var y = text.slice(0, -1);
        setText(y);
    }
  
    return (
  
      <div>
        <button className="btn"  onClick={()=>disp()}>
          <img src={img1} alt=""/>
        </button>
      </div>
    )
}
