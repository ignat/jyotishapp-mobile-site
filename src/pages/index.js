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
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4">
            <img alt="Chart" className="block" src={chartIllustration}/>
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
    <p className="mb-4"><b>Jyotish Computer</b> is a fully featured Vedic Astrology software for iPhone and iPad.
    The list of features include:
    </p>

    <ul className="my-4 list-disc list-inside">
      <li>Southern, Northern, and Eastern chart styles</li>
      <li>Divisional Charts - up to D60</li>
      <li>Vimshottari and other variations dasha periods</li>
      <li>Planet positions in Nakshatras</li>
      <li>Chara Karakas</li>
      <li>Tithi, Yoga, Karana, Sunrise, Sunset</li>
      <li>Retrograde planets indicator</li>
      <li>Current time charts</li>
      <li>Map integration for finding geographical coordinates</li>
    </ul>

    <div className="text-center">
      <a href="https://apps.apple.com/us/app/jyotish-vedic-astrology-computer/id485847194?mt=8" className="app-store-badge"></a>
    </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
