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
            <img alt="Chart" className="block mx-auto mb-6" src={chartIllustration}/>
          </div>
          <div className="w-1/2 ml-8">
            <p className="mb-4">
    <span className="font-bold">Jyotish Computer</span> is a fully featured Vedic Astrology software for iOS. The list of features include:</p>

    <ul className="my-4 list-disc list-inside">
      <li>Southern, Northern, and Eastern chart styles</li>
      <li>Divisional Charts: D2, D3, D4, D7, D9, D10, D12, D16, D20, D24, D27, D30, D40, D45, D60</li>
      <li>Vimshottari (and variations) dasha periods</li>
      <li>Planet positions in Nakshatras</li>
      <li>Chara Karakas</li>
      <li>Tithi, Yoga, Karana, Sunrise, Sunset</li>
      <li>Retrograde planets indicator</li>
      <li>Charts for current time</li>
      <li>Map integration for finding geographical coordinates</li>
    </ul>

    <a href="https://apps.apple.com/us/app/jyotish-vedic-astrology-computer/id485847194?mt=8" className="app-store-badge"></a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
