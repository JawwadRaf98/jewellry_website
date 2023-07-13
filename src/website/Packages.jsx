import React, { useEffect, useState } from "react";
import InnerBanner from "./components/InnerBanner";
import PackagesCallout from "./components/PackagesCallout";
import SectionTwo from "./components/SectionTwo";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function Packages() {
  const { data: packages, loading, error } = useFetch("packages");
  if (loading) return <Loader />;
  const {
    innerBanner,
    packageSection1,
    packageSection2,
    packageSection3,
    packageSection4,
  } = packages;

  const { heading, subHeading } = innerBanner;
  return (
    <main className="innerPage packages">
      <MetaDecorator seo={packages.seo} />
      <InnerBanner heading={heading}>
        <h3>{subHeading}</h3>
      </InnerBanner>
      <PackagesCallout heading="Platinum Compliance Package">
        <p>
          The platinum compliance package is excellent for practices, who want a
          complete piece of mind. It includes your annual risk assessment &
          training. This is an annual package that would take care of all your
          compliance needs. All services and training can be booked straight
          through the All-In-One Management Software.
        </p>
      </PackagesCallout>
      <SectionTwo sectionData={packageSection1} />
      <SectionTwo sectionData={packageSection2} />
      <PackagesCallout heading="New Practice Start Up Package">
        <p>
          Are you planning on opening a new practice? Well, look no further. We
          provide registration set up, this would include taking care of your
          CQC registration forms, guiding you through the initial start up
          process, all the way through till the end. We’ll organise an initial
          inspection visit advising you on the best equipment, best services,
          and cost-effective programmes.
        </p>
      </PackagesCallout>
      <SectionTwo sectionData={packageSection3} />
      <SectionTwo sectionData={packageSection4} />
    </main>
  );
}

export default Packages;
