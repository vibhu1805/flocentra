import { contact_heading } from "@/components/ui/contact_heading";
import { contactUs_info } from "@/components/ui/contactUs_info";

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

    }

    
    return (
        <div style={cu}>
            <div style={dark_bg}>
                <div style={img_bg}>
                    
                    {/* <contact_heading/>
                    <contactUs_info/>   */}
                </div>     
            </div>
        </div>
    )

}