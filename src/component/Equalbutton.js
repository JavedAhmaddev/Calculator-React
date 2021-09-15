import React from 'react'

export default function Equalbutton(props) {
    const { text, setText } = props;
    const disp = () => {
        let z;

        if (text.indexOf("Sin") > -1) {
            var ret = text.replace("Sin", "");
  
            let temp = Math.sin(ret);
            setText(temp);
          } else if (text.indexOf("Cos") > -1) {
            z = text.substr(3);
            let temp = Math.cos(z);
  
            setText(temp);
          } else if (text.indexOf("Tan") > -1) {
            z = text.substr(3);
            let temp = Math.tan(z);
  
            setText(temp);
          }
          else{
            setText(eval(text));
          }

      
    }
  
    return (
  
      <div>
        <button className="btn"  onClick={()=>disp()}>
          =
        </button>
      </div>
    )
}
