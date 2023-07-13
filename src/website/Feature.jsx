import React, { useEffect, useState } from "react";
import InnerBanner from "./components/InnerBanner";
import ProductFeature from "./components/ProductFeature";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function Feature() {
  const { data: feature, loading, error } = useFetch("features");
  if (loading) return <Loader />;
  const { innerBanner, pageData } = feature;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="features">
      <MetaDecorator seo={feature.seo} />
      <InnerBanner heading={heading}>
        <h3>{subHeading}</h3>
      </InnerBanner>
      <ProductFeature products={pageData} />
    </main>
  );
}

export default Feature;
