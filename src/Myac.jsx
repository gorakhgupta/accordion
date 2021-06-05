import { React, useState } from 'react';


const Myac = ({Question,answer})=>{
    const[show,setShow]= useState(false);
    return(
        <>
        <div className="Mydata">
        <div className="main_div ">
        <p onClick={()=>{
            setShow(!show);
        }}>➕</p>
        <h4>{Question}</h4>
         </div>
        
        {show ? `${answer}` : null}
       </div>
        </>
    )

}
export default Myac;