import { contact_heading } from "@/components/ui/contact_heading";
import { contactUs_info } from "@/components/ui/contactUs_info";
import conveximgCU from "../components/images/conveximgCU.png";


export const contactUs = () => {

    const cu:React.CSSProperties ={

    }


    const dark_bg:React.CSSProperties ={
        backgroundColor:"#23363E",
        opacity:"90%",
        borderEndEndRadius: "40px",
        height:"812px",
        width:"1343px"


    }
    
    const img_bg:React.CSSProperties ={
        height:"100rem",
        width:"100%",

    }

    const infost:React.CSSProperties ={
        backgroundColor:"#EBD1E4",
        
    }

    
    return (
        <div style={cu}>
            <div style={dark_bg}>
                <div style={img_bg}>
                    <img src="conveximgCU" alt="bgimg">
                    {/* <contact_heading/> */}
                    <div style={infost}>
                        {/* <contactUs_info/>   */}
                    </div>
                    </img>
                </div>     
            </div>
        </div>
    )

}