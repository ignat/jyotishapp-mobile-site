import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = site.siteMetadata.keywords.concat(keywords);

  return (
    <Helmet
      htmlAttributes={{ lang, }}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: `${title} | ${site.siteMetadata.title}` },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: `${title} | ${site.siteMetadata.title}` },
        { name: `twitter:description`, content: metaDescription },
      ].concat(
        metaKeywords.length > 0
          ? { name: `keywords`, content: metaKeywords.join(`, `) } : []
      ).concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
