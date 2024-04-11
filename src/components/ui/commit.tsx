import "bootstrap/dist/css/bootstrap.css";
import * as commit1 from "../../app/assets/commit1.png";
import * as commit2 from "../../app/assets/commit2.png";
import * as commit3 from "../../app/assets/commit3.png";
import * as commit4 from "../../app/assets/commit4.png";
import * as commit5 from "../../app/assets/commit5.png";
import * as commit6 from "../../app/assets/commit6.png";
import * as commit7 from "../../app/assets/commit7.png";
import Image from "next/image";
export const Commit = () => {
    return (
        <div className="container-fluid">
            <h1 className="display-5 text-center ">
                We are committed...
            </h1>
            <div className="mx-5 mt-5 container">
                <div className="row gp">
                    <div className="col-sm gp">
                        <div className="image">
                            <Image src={commit1} width="80" height="80" alt="Logo of Flocentra" /></div>
                        <div className="text ">Taking personal responsibility for the safety and security of each customer and employee.
                        </div>
                    </div>
                    <div className="col-sm gp">
                        <div className="image ">
                            <Image src={commit2} width="80" height="80" alt="Logo of Flocentra" /></div>
                        <div className="text ">Ensuring High quality, Convenient and timely personal service to each client giving 24/7 coverage.</div>
                    </div>
                    <div className="col-sm gp">
                        <div className="image ">
                            <Image src={commit3} width="80" height="80" alt="Logo of Flocentra" /></div>
                        <div className="text ">Continuous service from enquiry to post flight with Quick response time.</div>
                    </div>


                </div>


            </div>
            <div className="mx-5 mt-5 container">
                <div className="row gp">
                    <div className="col-sm gp">
                        <div className="image">
                            <Image src={commit4} width="80" height="80" alt="Logo of Flocentra" /></div>
                        <div className="text ">Expert knowledge of aviation industry.
                        </div>
                    </div>
                    <div className="col-sm gp">
                        <div className="image ">
                            <Image src={commit5} width="80" height="80" alt="Logo of Flocentra" /></div>
                        <div className="text ">Setting realistic and accessible goal pursued with perseverance.</div>
                    </div>
                    <div className="col-sm gp">
                        <div className="image ">
                            <Image src={commit6} width="80" height="80" alt="Logo of Flocentra" /></div>
                        <div className="text ">Keeping up with the industry’s standards and Challenges.</div>
                    </div>
                </div>
            </div>
    
            <div className="container center mt-5 ">
                <Image src={commit7} width="80" height="80" alt="Logo of Flocentra" /></div>
            <p className="textg">Aiming to satisfy and enchant our partners and customers with our professionalism, flexibility, readiness and integrity.</p>

        </div >
    )
}