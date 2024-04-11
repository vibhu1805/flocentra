import "bootstrap/dist/css/bootstrap.css";
import * as aero from "../../app/assets/aero.png"
import Image from "next/image";
export const Bestpart = () => {
  return (
    <div className="container-fluid par">
      <div className=" leftarea ms-5 mt-5">
        The company has been incorporated by Mrs. Sudha Mishra and Mr. Dhiraj
        Mishra with the vision of delivering best possible services to the
        aviation Industry with in country as well as globally. We aim on
        Cultivating and adapting the best international standards and practice
        as a habitat environment with in the organization. We are focused on
        achieving all commitments made to the client aiming perfection and
        delivering right service at right time and right place at best
        prize,ensuring optimal utilization of resources.
      </div>
        <Image src={aero} width="380" height="380" alt="Logo of Flocentra" />
    </div>
  );
};
