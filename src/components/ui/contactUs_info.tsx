// import React, { useState } from 'react';


export const contactUs_info = () => {

    const divSt:React.CSSProperties = {
        fontFamily:"Benne",
        fontSize:"25px",
        color:"#23363E"
    }

    const h2St:React.CSSProperties= {
        fontFamily:"Inter",
        fontSize:" 20px"

    }

    return(
        <div style={divSt} >
            <h2 style={h2St}> ADDRESS</h2>
            <p>Flocentra Aviation Private Limited</p>
            <p> RZ-681-A/9, Gali No. 27-C </p>
            <p>Sadh Nagar-II, Palan Colony </p>
            <p>New Delhi PIN CODE-110045</p>
            <h2>MAIL</h2>
            <p>ops@flocentraaviation.in</p>
            <h2 style={h2St}>PHONE NO.</h2>
            <p>+91-9582775827</p>
            <p>+91-88640944661</p>
        </div>
    )
}