import React from 'react';
import decoration from "../dist/webImages/583-courses-10.jpg"
import callUs from "../dist/webImages/1.png"

function InnerBanner({ heading, children }) {
    return (
        <div className="innerBanner">
            <img src={decoration} alt="" />
            <a href="" className="callNow">
                <img src={callUs} alt="" />
            </a>
            <div className="innerBanner__text">
                <h1>{heading}</h1>
                {children}
            </div>
        </div>
    );
}


export default InnerBanner;
