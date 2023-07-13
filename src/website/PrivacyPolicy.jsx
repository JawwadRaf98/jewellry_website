import React from "react";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";

function PrivacyPolicy() {
  const { data: privacy, loading, error } = useFetch("privacy-policy");
  if (loading) return <Loader />;
  const { innerBanner, pageData } = privacy;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="privacypolicy">
      <InnerBanner heading={heading}>
        <MetaDecorator seo={privacy.seo} />
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

export default PrivacyPolicy;
