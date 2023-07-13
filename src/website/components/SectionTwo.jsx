import React from "react";
import Button from "./common/Button";
import List from "./common/List";
import Youtube from "./common/Youtube";
import CourseDetails from "./CourseDetails";
import CPD from "./CPD";
import DataList from "./DataList";
import PropTypes from "prop-types";

function SectionTwo({ sectionData, extraClass = "" }) {
  return (
    <section className={`section2 commonBlock ${extraClass}`}>
      {sectionData &&
        sectionData.map(
          (
            {
              ytSrc,
              mainImage,
              highlightText,
              mainHeading,
              subHeading,
              text,
              media,
              list,
              dataList,
              path,
              buttonText,
              courseDetails,
              courseText,
              packageData,
            },
            index
          ) => {
            return (
              <React.Fragment key={index}>
                <div className="block1x2" key={index}>
                  <div className="left">
                    {ytSrc && <Youtube height src={ytSrc} />}
                    {mainImage && <img src={mainImage} alt="" />}
                  </div>
                  <div className="right">
                    <div dangerouslySetInnerHTML={{ __html: list }} />
                    <h4>{highlightText}</h4>
                    {/* <h2>{mainHeading}</h2> */}
                    {courseText && (
                      <div dangerouslySetInnerHTML={{ __html: courseText }} />
                    )}
                    {packageData && (
                      <div dangerouslySetInnerHTML={{ __html: packageData }} />
                    )}
                    <h3>{subHeading}</h3>
                    <p>{text}</p>
                    {media && <CPD data={media} />}
                    {dataList && <DataList lists={dataList} />}
                    {/* {list && <List list={list} />} */}

                    <Button path={path} text={buttonText} w100 />
                  </div>
                </div>
                {courseDetails && <CourseDetails details={courseDetails} />}
              </React.Fragment>
            );
          }
        )}
    </section>
  );
}

export default SectionTwo;
