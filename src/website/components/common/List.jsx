import React from "react";

function List({ list }) {
  return (
    <ul className="list">
      {list.map((item, index) => (
        <li className="list__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
