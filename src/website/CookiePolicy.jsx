import React from "react";
import Policy from "./components/Policy";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";

function CookiePolicy() {
  const { data: cookie, loading, error } = useFetch("cookie-policy");
  if (loading) return <Loader />;
  const { innerBanner, pageData } = cookie;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="cookiepolicy">
      <InnerBanner heading={heading}>
        <MetaDecorator seo={cookie.seo} />
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

export default CookiePolicy;
