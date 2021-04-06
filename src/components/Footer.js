import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="" style={{marginTop:'400px'}}>
            <p className="text-center">{year} &copy; KANON</p>
         
        </div>
    )
};
export default Footer;
