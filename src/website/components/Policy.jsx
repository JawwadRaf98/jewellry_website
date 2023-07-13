import React from "react";
import List from "./common/List";
import { Link } from "react-router-dom";

function Policy({ sectionDatas }) {
  return (
    <section className="commonBlock grid grid-col90 block">
      <div className="block__inner">
        {sectionDatas.map(
          (
            { mainHeading, subHeading, description, list, table, anchar },
            index
          ) => {
            return (
              <React.Fragment key={index}>
                <h2>{mainHeading}</h2>
                <h3>{subHeading}</h3>
                <p>{description}</p>
                <Link to="">{anchar}</Link>
                {list && <List list={list} />}
                {/* {table && <Table table={table} />} */}
              </React.Fragment>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Policy;
