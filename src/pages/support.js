import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function SupportPage() {
  return (
    <Layout>
      <SEO
        keywords={[`jyotish`, `vedic`, `astrology`, `ios`, `support`, `mobile`, `jyotishapp`]}
        title="Support"
      />

      <section>
        <h1 className="text-4xl font-bold my-4">Support</h1>
        <p className="my-4">Feel free to send your questions, suggestions, feature requests, and bug reports to our email address at <a href="mailto:info@jyotishapp.com" className="text-blue-600">info@jyotishapp.com</a>.</p>
        <p className="my-4">Follow us on <a href="https://twitter.com/jyotishapp" className="text-blue-600" target="_blank" rel="noreferrer">Twitter</a> and/or on <a href="https://facebook.com/jyotishapp" className="text-blue-600" target="_blank" rel="noreferrer">Facebook</a> to get the latest updates, participate in discussions, or DM your questions.</p>
      </section>
    </Layout>
  );
}

export default SupportPage;
