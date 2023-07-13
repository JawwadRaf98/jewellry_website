import React from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Callout from "./components/Callout";
import Banner from "./components/Banner";
import Review from "./components/Review";
import VideoCallOut from "./components/VideoCallOut";
import Services from "./components/Services";
import { useContext, useState, useEffect } from "react";
import { ModalDailogContext } from "./context/ModalDailogContext";
import MetaDecorator from "./components/common/MetaDecorator";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";

function Home() {
  const { showDailog } = useContext(ModalDailogContext);
  const [showModalDailog, setShowModalDailog] = showDailog;
  const { data: home, loading, error } = useFetch("home");

  document.addEventListener(
    "keyup",
    (e) => e.code === "Escape" && showModalDailog && setShowModalDailog(false)
  ); 

  if (loading) return <Loader />;
  const {
    indexSectionTwo,
    indexSectionThree,
    banner,
    reviews,
    VideoCallOut: callout,
    services,
  } = home;
  return (
    <main>
      <MetaDecorator seo={home.seo} />
      <Banner banner={banner} />
      <SectionOne />
      <SectionTwo sectionData={indexSectionTwo} />
      <Callout heading="Manage everything in one place!">
        <p>
          Manage all your day to day activities with one simple software,
          whether its updating
          <span>Compliance</span> , completing <span>CPD Courses</span> ,
          <span>Recruiting Staff</span> , <span>Calculating Annual Leave</span>
        </p>
      </Callout>
      <SectionTwo sectionData={indexSectionThree} extraClass="section3" />
      <VideoCallOut videoCallOut={callout} />
      <Review reviews={reviews} />
      <Services services={services} />
    </main>
  );
}

export default Home;
