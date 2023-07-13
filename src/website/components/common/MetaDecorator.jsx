import React from "react";
import { Helmet } from "react-helmet-async";
function MetaDecorator({ seo }) {
  const { title, keywords, description, robots, type } = seo;
  const location = window.location.href;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={location} />
      <meta property="fb:admins" content="123" />
      <meta property="fb:admins" content="142" />
      <meta name="twitter:card" content="summery" />
      <meta name="twitter:url" content={location} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@" />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta
        content="Interactive Media Pakistan - imedia.com.pk"
        name="author"
      />
    </Helmet>
  );
}

export default MetaDecorator;
