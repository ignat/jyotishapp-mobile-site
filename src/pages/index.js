import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import chartIllustration from "../images/chart.svg";

function HomePage() {
  return (
    <Layout>
      <SEO
        keywords={[`jyotish`, `vedic`, `astrology`, `ios`, `home`, `mobile`, `jyotishapp`]}
        title="Home"
      />

      <section className="">
        <div className="flex">
          <div className="w-1/2">
            <img alt="Chart" className="block mx-auto mb-8" src={chartIllustration}/>
          </div>
          <div className="w-1/2 ml-4">
            <p className="mb-4"><span className="font-bold">Jyotish Computer</span> is a fully featured Vedic Astrology software for iOS.</p>
            <a href="https://apps.apple.com/us/app/jyotish-vedic-astrology-computer/id485847194?mt=8" className="app-store-badge"></a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
