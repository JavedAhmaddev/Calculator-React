import React from 'react'

export default function Button(props) {
  const { text, setText, place } = props;
  const disp = (val) => {
    setText(text + val)
  }

  return (

    <div>
      <button className="btn" value={place} id={place} onClick={()=>disp(place)}>
        {place}
      </button>
    </div>
  )
}
