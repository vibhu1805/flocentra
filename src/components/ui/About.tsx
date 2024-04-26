import React, {useState} from 'react';
import imageToAdd from "./../ui/Images/LOGO FLOCENTRA FINAL (1).jpg";

                            
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
                "Mr. DHIRAJ MISHRA, the Managing Director and CEO of the company post graduated in Business Administration from Amity University. 
                He is a dynamic seasoned professional with nearly three decades of rich experience in the field of Aviation and Security. 
                Holds distinction of implementing various techniques for improving the operational efficiency along with energy conservation and cost savings by optimal utilization of resources. 
                An effective communicator with excellent relationship management skills, and strong analytical, problem solving & organizational abilities;
                possess a flexible & detail oriented attitude with commitment and perfection." 
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