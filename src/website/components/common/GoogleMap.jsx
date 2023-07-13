import React from 'react';

function GoogleMap({ src }) {
    return (
        <iframe
            src={src}
            allowFullScreen=""
            loading="lazy"
            style={{ border: "none" }}
        ></iframe>
    );
}

export default GoogleMap;
