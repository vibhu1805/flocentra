import React, {useState} from 'react';
export const About = () => {
    const Aboutst:React.CSSProperties = {
        fontFamily:"Benne",
        fontSize:"25px",
        color:"#23363E"
    }

    const servicestl:React.CSSProperties={
        fontFamily:"Inter",
        fontSize:"20px"
    }
    return(
        
        <div style={Aboutst}>
            <img> </img>
            <div>                
                <p>
                Services
                </p>
                <h4>
                    Mr. Dhiraj Kumar
                </h4>
                <h6>
                    Managing Director and CEO
                </h6>
            </div>
            <div>
                <p>
                "Mrs. SUDHA MISHRA, The founder, Chairperson and woman Director of the company, post graduated in the English and has more than 25 years of experience as an entrepreneur and an excellent management consultant in different industries including aviation.
                Expert in understanding and delivering business concepts in flashy and never-forgettable manner. A highly creative, energetic, customer-focused professional with progressive experience. 
                Adept in planning and executing aggressive strategies to achieve business goals."
                </p>
                <h4>
                    Mrs. Sudha Mishra
                </h4>
                <h6>
                    Founder, Chairperson and Woman Director
                </h6>
            </div>



            
        </div>

    )
}