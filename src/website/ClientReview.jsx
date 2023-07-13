import React, { useEffect, useState } from "react";
import Youtube from "./components/common/Youtube";
import InnerBanner from "./components/InnerBanner";
import clientOne from "./dist/webImages/111.png";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import MetaDecorator from "./components/common/MetaDecorator";
function ClientReview() {
  const { data, loading, error } = useFetch("reviews");
  const [currentClient, setCurrentClient] = useState(0);
  const handleClient = (id, event) => {
    event.preventDefault();
    setCurrentClient(id);
  };
  if (loading) return <Loader />;
  const { innerBanner, reviews } = data;
  const { heading } = innerBanner;
  return (
    <main className="review">
      <InnerBanner heading={heading} />
      <MetaDecorator seo={data.seo} />
      <section className="commonBlock grid grid-col80 block">
        <div className="block__inner">
          <div className="youtubeBlock">
            <Youtube src={reviews[currentClient].youtubeSrc} />
          </div>
        </div>
      </section>
      <section className="commonBlock grid grid-col80 block">
        <div className="block__inner grid block1x3">
          {reviews.map(({ image }, index) => {
            return (
              <a
                href=""
                key={index}
                onClick={(event) => {
                  handleClient(index, event);
                }}
              >
                <img src={image} alt="" />
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ClientReview;
