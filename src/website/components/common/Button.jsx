  import React from "react";
import { Link } from "react-router-dom";
function Button({ path = "", text, w100, id, ...rest }) {
  let classes = "btn ";
  classes += w100 ? "w-100" : "";
  return (
    <Link to={path} className={classes} id={id} {...rest}>
      <span id={id}>{text}</span>
    </Link>
  );
}

export default Button;
