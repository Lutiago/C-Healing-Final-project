import {AiFillInstagram} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="container">
      <div className="width-full d-flex footer text-center row">
        <div className="col-md-6 d-flex align-items-center justify-content-justified text-white">
          If you or someone you know is experiencing an emergency or crisis and
          needs immediate help, call 911 or go to the nearest emergency room.
          Additional crisis resources can be found{" "}
          <a href="https://www.apa.org/topics/crisis-hotlines">here</a>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center text-white">
          <div className= "" >Social Media </div>
          <div className= ""><AiFillInstagram /> 
        </div>
          
        </div>
      </div>
    </div>
  );
};
