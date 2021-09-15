import React from 'react'

export default function Clearbutton(props) {
    const {setText} = props;
  const disp = () => {
    setText("")
  }

  return (

    <div>
      <button className="btn" value="C" onClick={()=>disp()}>
        C
      </button>
    </div>
  )
}
