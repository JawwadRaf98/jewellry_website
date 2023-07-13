import React from "react";
import Policy from "./components/Policy";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function ComplaintsPolicy() {
  const { data: complaints, loading, error } = useFetch("complaints-policy");
  if (loading) return <Loader />;
  const { innerBanner, pageData } = complaints;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="privacypolicy">
      <MetaDecorator seo={complaints.seo} />
      <InnerBanner heading={heading}>
        <h3>{subHeading}</h3>
      </InnerBanner>
      <section className=" grid grid-col80 block ">
        <div
          className="block__inner"
          dangerouslySetInnerHTML={{ __html: pageData }}
        />
      </section>
    </main>
  );
}

export default ComplaintsPolicy;
