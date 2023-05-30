import React from "react";
import Heading from './../div1/Heading/Heading';
import Process from "./process/process";
import processes from './process/processes';
import './div4.css';

function Div4(){
    return (
        <div id="our-process" className="div4">
            <Heading style={{textAlign:'center',color:'red',fontWeight:'600'}} content='Our Process' />
            <div className="processes">
                {
                    processes.map((el,index)=>(<Process key={index} title={el.title} content={el.content} src={el.src} />))
                }
            </div>
        </div>
    )
}

export default Div4;