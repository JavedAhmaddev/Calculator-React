import React, { useState } from 'react'
import Anglebuttons from './Anglebuttons'
import Back from './Back'
import Button from './Button'
import Clearbutton from './Clearbutton'
import Equalbutton from './Equalbutton'

export default function Ans() {
    const [text, setText] = useState("")
    return (
        <div className="box">
            <input type="text" class="ans" id="ans" value={text} placeholder="0" disabled />
            <div className="btn-container">
                <div className="row pt">
                    <div className="col">
                        <Clearbutton setText={setText} />
                        <Equalbutton text={text} setText={setText}/>
                        

                    </div>
                    <div className="row">
                        <div className="col">
                            <Button text={text} setText={setText} place="7" />
                            <Button text={text} setText={setText} place="8" />
                            <Button text={text} setText={setText} place="9" />
                            <Button text={text} setText={setText} place="+" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Button text={text} setText={setText} place="4" />
                            <Button text={text} setText={setText} place="5" />
                            <Button text={text} setText={setText} place="6" />
                            <Button text={text} setText={setText} place="-" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button text={text} setText={setText} place="1" />
                            <Button text={text} setText={setText} place="2" />
                            <Button text={text} setText={setText} place="3" />
                            <Button text={text} setText={setText} place="*" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Button text={text} setText={setText} place="0" />
                            <Button text={text} setText={setText} place="." />
                            <Button text={text} setText={setText} place="/" />
                            <Back text={text} setText={setText} />
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Anglebuttons text={text} setText={setText} place="Sin" />
                            <Anglebuttons text={text} setText={setText} place="Cos" />
                            <Anglebuttons text={text} setText={setText} place="Tan" />      
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
