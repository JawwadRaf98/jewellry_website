import React from "react";
import InnerBanner from "./components/InnerBanner";
import MetaDecorator from "./components/common/MetaDecorator";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
function About() {
  const { data: about, loading, error } = useFetch("about");
  if (loading) return <Loader />;

  const { innerBanner, pageData } = about;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="about">
      <MetaDecorator seo={about.seo} />
      <InnerBanner heading={heading}>
        <h3> {subHeading}</h3>
      </InnerBanner>
      <section className="commonBlock grid grid-col80 block">
        <div className="block__inner">
          <div dangerouslySetInnerHTML={{ __html: pageData }} />
        </div>
      </section>
    </main>
  );
}

export default About;
