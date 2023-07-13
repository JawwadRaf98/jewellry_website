import React from "react";
import InnerBanner from "./components/InnerBanner";
import useFetch from "../customHooks/useFetch";
import Loader from "./components/Loader";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function BlogSingle() {
  const { id } = useParams();

  const { data: blog, loading, error } = useFetch(`blog/${id}`);
  if (loading) return <Loader />;
  const { innerBanner, blogInner } = blog;
  const { heading, subHeading } = innerBanner;

  return (
    <div className="blog">
      <InnerBanner heading={heading}>
        <h3>{subHeading}</h3>
      </InnerBanner>
      <div className="block grid grid-col80">
        <div className="block__inner">
          {blogInner[0].category ? (
            blogInner.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card__img">
                    <img src={item.image} alt="" />
                    <span>{`${item.category} Date : ${item.date}`}</span>
                    <h3>{item.heading}</h3>
                  </div>
                  <div className="card__body">
                    <p>{item.text}</p>
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />

                    <div className="view">
                      <span>Views</span>
                      <span>{item.views}</span>
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Post avalilable</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogSingle;
