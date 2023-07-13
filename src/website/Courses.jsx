import React, { useEffect, useState } from "react";
import SectionTwo from "./components/SectionTwo";
import InnerBanner from "./components/InnerBanner";
import Callout from "./components/Callout";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function Courses() {
  const { data: courses, loading, error } = useFetch("courses");
  if (loading) return <Loader />;
  const {
    innerBanner,
    courseSection1,
    courseSection2,
    courseSection3,
    courseSection4,
    courseSection5,
  } = courses;
  const { heading, subHeading } = innerBanner;
  return (
    <main className="innerPage courses">
      <MetaDecorator seo={courses.seo} />
      <InnerBanner heading={heading}>
        <h3>{subHeading}</h3>
      </InnerBanner>
      <SectionTwo sectionData={courseSection1} />
      <Callout>
        <p>
          All our courses are delivered in a simulation style, with role play
          <span>FUN</span>,<span>JUICY</span>,<span>INTERACTIVE</span> way of
          learning for you and your team
        </p>
      </Callout>
      <SectionTwo sectionData={courseSection2} />
      <Callout>
        <p>
          All our courses include a <span>FREE</span> site inspection, looking
          into your current compliance procedures
        </p>
      </Callout>
      <SectionTwo sectionData={courseSection3} />
      <Callout>
        <p>
          All our courses comes with <span>Interactive Handouts</span>,{" "}
          <span>CPD Packs</span> and a sample
          <span>Compliance Logbook</span>
        </p>
      </Callout>
      <SectionTwo sectionData={courseSection4} />
      <SectionTwo sectionData={courseSection5} />
    </main>
  );
}

export default Courses;
