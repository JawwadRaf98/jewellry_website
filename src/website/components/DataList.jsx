import React from "react";
import List from "./common/List";

function DataList({ lists }) {
  return lists.map(({ heading, items }, index) => {
    return (
      <React.Fragment key={index}>
        <h6>{heading}</h6>
        <List list={items} />
      </React.Fragment>
    );
  });
}

export default DataList;
