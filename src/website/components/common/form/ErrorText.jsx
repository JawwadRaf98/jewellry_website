import React from "react";
import styled from "styled-components";
import { FcGoogle } from 'react-icons/fc';
// import { FcGoogle } from 'react-icons/fc';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
const Text = styled.div`
  font-size:12px;
  color:#d91111;
  bottom:-1.5rem;
  position:absolute;
  display:flex;
  gap:5px;
    align-item:center

`

function ErrorText(props) {
    return <Text >
        {/* <FontAwesomeIcon icon={faExclamationCircle} /> */}
        {props.children}
    </Text>;
}

export default ErrorText;
