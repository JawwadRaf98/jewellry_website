import React from "react";
import Policy from "./components/Policy";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function DataProtectionPolicy() {
  const { data, loading, error } = useFetch("data-protection-policy");
  if (loading) return <Loader />;
  const { innerBanner, pageData } = data;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="dataprotectionpolicy">
      <InnerBanner heading={heading}>
        <MetaDecorator seo={data.seo} />
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

export default DataProtectionPolicy;
