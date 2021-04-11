import React from "react";

import insta from "../images/instagram (3).svg";
import fb from "../images/facebook (2).svg";
import twitter from "../images/twitter (2).svg"

const Footer = () => {
    return ( 
        <>
            <div className="footer">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> 


                <div className="icons">
                    <div style={{textAlign:"center"}}> 
                        <img src={insta}/>
                        <img src={fb}/>
                        <img src={twitter}/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;