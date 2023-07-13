import React from "react";
import InnerBanner from "./components/InnerBanner";
import blogImage from "./dist/webImages/image.jpg";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import { Link } from "react-router-dom";
import MetaDecorator from "./components/common/MetaDecorator";

function Blog() {
  const { data: blogPage, loading, error } = useFetch("blog");
  const version = process.env.REACT_APP_VERSION;
  if (loading) return <Loader />;
  const { innerBanner, blog } = blogPage;
  const { heading, subHeading } = innerBanner;
  let mostViewedBlog = blog.reduce((max, obj) =>
    max.views > obj.views ? max : obj
  );
  let sorted = blog.filter((max, obj) => (max.views > obj.views ? max : obj));
  return (
    <main className="blog">
      <InnerBanner heading={heading}>
        <h3>{subHeading}</h3>
      </InnerBanner>
      <MetaDecorator seo={blogPage.seo} />
      <section className="commonBlock grid grid-col80 block">
        <div className="block__inner block1x2">
          <div className="left">
            <div className="card">
              <div className="card__img">
                <img src={mostViewedBlog.image} alt="" />
              </div>
              <div className="card__body">
                <span>{`${mostViewedBlog.category} Date : ${mostViewedBlog.date}`}</span>
                <Link to={`${mostViewedBlog.slug}`}>{mostViewedBlog.text}</Link>
              </div>
            </div>
          </div>
          <div className="right">
            <h6>MOST POPULAR</h6>
            {sorted.map((item, key) => {
              return (
                <div className="card" key={key}>
                  <div className="card__img">
                    <h6>{item.heading}</h6>
                    <span>{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="commonBlock grid grid-col80 block">
        <div className="block__inner grid block1x4">
          {blog.map((item) => {
            return (
              <div className="card" key={item.slug}>
                <div className="card__img">
                  <img src={item.image} alt="" />
                </div>
                <div className="card__body">
                  <span>{`${item.category} Date : ${item.date}`}</span>
                  <Link to={`${item.slug}`}>{item.text}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Blog;
