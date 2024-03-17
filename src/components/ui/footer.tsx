import 'material-icons/iconfont/material-icons.css';
import 'material-icons/iconfont/filled.css';
import './footer.css';
import 'bootstrap-icons';
import logoflocentra from  '../images/LOGO FLOCENTRA FINAL (1).jpg';
import nameflocentra from '../images/WhatsApp Image 2024-02-29 at 10.34.29.jpeg';
import Image from 'next/image';


export const footer = () => (

    <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
                <a href="#" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <Image src={logoflocentra} alt="flocentra_logo"></Image>
                    <Image src={nameflocentra} alt="flocentra_name"></Image>

                </a>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://www.aai.aero/" className="nav-link p-0 text-body-secondary">Airport Authority of India</a></li>
                    <li className="nav-item mb-2"><a href="https://www.dgca.gov.in/digigov-portal/" className="nav-link p-0 text-body-secondary">DGCA</a></li>
                    <li className="nav-item mb-2"><a href="https://www.bcasindia.gov.in/#!/hi_home" className="nav-link p-0 text-body-secondary">BCAS</a></li>
                    <li className="nav-item mb-2"><a href="https://www.civilaviation.gov.in/" className="nav-link p-0 text-body-secondary">Ministry of Civil Aviation</a></li>
                    <li className="nav-item mb-2"><a href="https://tourism.gov.in/" className="nav-link p-0 text-body-secondary">Ministry of Tourism</a></li>
                    <li className="nav-item mb-2"><a href="https://iato.in/" className="nav-link p-0 text-body-secondary">IATO</a></li>
                    <li className="nav-item mb-2"><a href="https://www.iora.int/" className="nav-link p-0 text-body-secondary">IORA</a></li>
                    <li className="nav-item mb-2"><a href="https://www.iata.org/" className="nav-link p-0 text-body-secondary">IATA</a></li>

                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined">person</span>
                        <p>
                            Mr. Dhiraj Mishra
                            Managin Director and CEO
                        </p>
                    </li>
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined">mail</span>
                        <p>
                            ceo@flocentraaviation.in/
                        </p>
                    </li>
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined">mail</span>
                        <p>dm711913@gmail.com</p>
                    </li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined">location_on</span>
                        <p>
                            FlocentraAviation Private Limited Z-681-A/9,
                            Gali No. 27-C Sadh Nagar-II,
                            Palam Colony
                            New Delhi
                            PIN CODE-110045
                        </p>
                    </li>
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined">mail</span>
                        <p>ops@flocentraaviation.in</p>
                    </li>
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined phone_icon">call</span>
                        <p>+91-9582775827</p>
                    </li>
                    <li className="nav-item mb-2">
                        <span className="material-symbols-outlined phone_icon">call</span>
                        <p>+91-88640944661</p></li>
                </ul>
            </div>
        </footer>
    </div>

    // <div className="footer">
    //     <div className="logo">
    //     </div>
    //     <div className="row1">
    //         <h2>QUICK LINKS</h2>
    //         <ul>
    //             <li><a href="https://www.aai.aero/">Airport Authority of India </a> </li>
    //             <li><a href="https://www.dgca.gov.in/digigov-portal/">DGCA</a></li>
    //             <li><a href="https://www.bcasindia.gov.in/#!/hi_home">BCAS</a></li>
    //             <li><a href="https://www.civilaviation.gov.in/">Ministry of Civil Aviation</a></li>
    //             <li><a href="https://tourism.gov.in/">Ministry of Tourism</a></li>
    //             <li><a href="https://iato.in/">IATO</a></li>
    //             <li><a href="https://www.iora.int/">IORA</a></li>
    //             <li><a href="https://www.iata.org/">IATA</a></li>
    //         </ul>
    //     </div>
    //     <div className="row2">
    //         <h2>PERSONAL CONTACT</h2>
    //         <div>
    //             <div>
    //                 <span className="material-symbols-outlined">person</span>
    //                 <p>
    //                     Mr. Dhiraj Mishra
    //                     Managin Director and CEO
    //                 </p>
    //             </div>
    //             <div>
    //                 <span className="material-symbols-outlined">mail</span>
    //                 <p>
    //                     ceo@flocentraaviation.in/
    //                 </p>
    //             </div>
    //             <div>
    //                 <span className="material-symbols-outlined">mail</span>
    //                 <p>dm711913@gmail.com</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="row3">
    //         <h2>CORPORATE OFFICE</h2>
    //         <div>
    //             <span className="material-symbols-outlined">location_on</span>
    //             <p>
    //                 FlocentraAviation Private Limited Z-681-A/9,
    //                 Gali No. 27-C Sadh Nagar-II,
    //                 Palam Colony
    //                 New Delhi
    //                 PIN CODE-110045
    //             </p>
    //         </div>
    //         <div>
    //             <span className="material-symbols-outlined">mail</span>
    //             <p>ops@flocentraaviation.in</p>
    //         </div>
    //         <div>
    //             <span className="material-symbols-outlined phone_icon" >call</span>
    //             <p>+91-9582775827</p>
    //             <span className="material-symbols-outlined phone_icon" >call</span>
    //             <p>+91-88640944661</p>
    //         </div>
    //     </div>
    // </div>
)