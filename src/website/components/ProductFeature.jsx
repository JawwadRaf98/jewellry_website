import React from "react";

function ProductFeature({ products }) {
  return (
    <section className="callout video grid grid-col80 block">
      <div
        className="block__inner grid block1x4"
        dangerouslySetInnerHTML={{ __html: products }}
      />

      {/* <div className="">
        {products.map(({ text, path }, index) => {
          return (
            <a href={path} key={index}>
              {text}
            </a>
          );
        })}
      </div> */}
    </section>
  );
}

export default ProductFeature;
