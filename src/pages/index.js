import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import appIcon from "../images/app-icon.png";
import darkMode from "../images/dark-mode.png";
import chartStyles from "../images/chart-styles.png";

import { Copy as DoubleIcon, Moon as DarkIcon, Shield as ShieldIcon, Eye as EyeIcon, Grid as GridIcon, RefreshCw as RefreshIcon } from "react-feather";

function HomePage() {
  return (
    <Layout>
      <SEO
        keywords={[`jyotish`, `vedic`, `astrology`, `ios`, `home`, `mobile`, `jyotishapp`]}
        title="Home"
      />

<section className="flex flex-wrap mt-8 mb-32">
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-5xl font-bold tracking-tight leading-tight">Vedic Astrology for Everyone</h1>
    <div className="my-4 text-gray-800 text-lg">
      Jyotish Computer is easy to use. Analyze events or see current transits. Keep database of your events and places.
    </div>
    <div className="my-8">
      <a href="https://apps.apple.com/us/app/jyotish-computer/id485847193?mt=8" className="app-store-badge"></a>
    </div>
  </div>
  <div className="w-full md:w-1/2 text-center">
    <img alt="App Icon" className="block m-auto rounded-lg shadow-lg" src={appIcon}/>
  </div>
</section>

<section className="my-32 text-center flex flex-wrap">
  <h1 className="w-full text-5xl font-bold tracking-tight leading-tight">Modern design</h1>
  <div className="w-full mt-4 mb-8 text-gray-800 text-lg">
    Written in SwiftUI. Takes advantage of the latest Apple framework. Works on iPhone and iPad.
  </div>
  <div className="w-full md:w-1/2 text-left mb-8">
    <div className="mb-4 flex">
      <div>
        <DarkIcon size={24} className="mr-5 mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Dark Mode</h3>
        <div className="my-1 text-gray-700">Thanks to SwiftUI, Dark Mode is built-in.</div>
      </div>
    </div>
    <div className="mb-4 flex">
      <div>
        <DoubleIcon size={24} className="mr-5 mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Big screen support</h3>
        <div className="my-1 text-gray-700">Analyze two divisional charts simultaniously on iPad.</div>
      </div>
    </div>
    <div className="mb-4 flex">
      <div>
        <ShieldIcon size={24} className="mr-5 mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">No external dependencies</h3>
        <div className="my-1 text-gray-700">Jyotish Computer doesn&apos;t use any 3rd party libraries to calculate or display charts.</div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 text-center">
    <img alt="App Icon" width="300" height="300" className="block m-auto rounded-lg shadow-lg" src={darkMode}/>
  </div>
</section>

<section className="mt-32 mb-8 flex flex-wrap text-center">
  <h1 className="w-full text-5xl font-bold tracking-tight leading-tight">Feature-rich</h1>
  <div className="w-full mt-4 mb-8 text-gray-800 text-lg">
    Jyotish Computer comes with lots of features. And we keep adding more.
  </div>
  <div className="w-full md:w-1/2 text-center mb-8">
    <img alt="App Icon" width="300" height="300" className="block m-auto rounded-lg shadow-lg" src={chartStyles}/>
  </div>
  <div className="w-full md:w-1/2 text-left">
    <div className="mb-4 flex">
      <div>
        <EyeIcon size={24} className="mr-5 mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">3 Chart Styles</h3>
        <div className="my-1 text-gray-700">Northern (Shukra Chakra), Southern (Guru Chakra), and Eastern (Surya Chakra) chart styles.</div>
      </div>
    </div>
    <div className="mb-4 flex">
      <div>
        <GridIcon size={24} className="mr-5 mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Divisional Charts</h3>
        <div className="my-1 text-gray-700">Analyze popular devisional charts up to D60.</div>
      </div>
    </div>
    <div className="mb-4 flex">
      <div>
        <RefreshIcon size={24} className="mr-5 mt-2" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Dasha Periods</h3>
        <div className="my-1 text-gray-700">Analyze Vimshottari Dasha and 8 of its variations up to Pranadasha.</div>
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
}

export default HomePage;
