import { AiFillInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="container">
      <div className="width-full d-flex footer text-center row">
        <div className="col-md-6 d-flex align-items-center justify-content-justified text-white">
          If you or someone you know is experiencing an emergency or crisis and
          needs immediate help, call 911 or go to the nearest emergency room.
          Additional crisis resources can be found{" "}
          <div className=""><a href="https://www.apa.org/topics/crisis-hotlines">here</a></div>
          
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center text-white">
          <div className="mx-auto p-2">
            <AiFillInstagram />
            <div className="mx-auto p-2">
              <FiTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
