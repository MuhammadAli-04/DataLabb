import React from "react";
import './process.css';


function Process(props){
    return (
        <div className="process">
            <div className="col-1-of-6 grid-container">{props.title}</div>
            <div className="col-5-of-6">
                <div className="col-4-of-5">
                    {props.content}
                </div>
                <div className="col-1-by-2-of-5 grid-container">
                    <img height='60px' width='60px' src={props.src}/>
                </div>
            </div>
        </div>
    )
}

export default Process;