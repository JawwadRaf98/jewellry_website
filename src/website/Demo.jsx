import React, { useEffect, useState } from "react";
import DemoSection from "./components/DemoSection";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function Demo() {
  const { data: demo, loading, error } = useFetch("demo");
  const [currentDemo, setCurrentDemo] = useState(0);

  if (loading) return <Loader />;
  const handleDemo = (id, event) => {
    event.preventDefault();
    setCurrentDemo(id);
  };
  const { innerBanner, pageData } = demo;
  const { heading } = innerBanner;
  const { demos } = JSON.parse(pageData);
  return (
    <main className="demand">
      <MetaDecorator seo={demo.seo} />
      <InnerBanner heading={heading} />
      <DemoSection
        demos={demos}
        currentDemo={currentDemo}
        handleDemo={handleDemo}
      />
    </main>
  );
}

export default Demo;
