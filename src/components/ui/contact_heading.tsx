import React, { useState } from 'react';

export const contact_heading = () =>{
   const h2Style:React.CSSProperties = {
      fontFamily:'Benne',
      fontSize: "40 px",
      color: "#23363E",
   }

   const pStyle:React.CSSProperties = {
      fontFamily:"Benne",
      fontSize:"20",
   }

   return (
      <div>
    <h2 style = { h2Style }>CONTACT US</h2>
    <p style = { pStyle } >Please fill in the form with your requirements. </p>
    </div>
   )
}