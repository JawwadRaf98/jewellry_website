import React, { useEffect, useState } from "react";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function Resource() {
  const { data: resource, loading, error } = useFetch("free-resources");
  if (loading) return <Loader />;
  const { innerBanner, pageData } = resource;
  const { heading, subHeading } = innerBanner;

  return (
    <main className="resource">
      <InnerBanner heading={heading}>
        <MetaDecorator seo={resource.seo} />
        <h3> {subHeading}</h3>
      </InnerBanner>
      <section className="commonBlock grid grid-col90 block">
        <div className="block__inner">
          <div dangerouslySetInnerHTML={{ __html: pageData }} />
        </div>
      </section>
    </main>
  );
}

export default Resource;
