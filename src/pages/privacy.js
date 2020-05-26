import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function PrivacyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`jyotish`, `vedic`, `astrology`, `ios`, `privacy`, `policy`, `mobile`, `jyotishapp`]}
        title="Privacy Policy"
      />

      <section>
        <h1 className="text-4xl font-bold my-4">Privacy Policy</h1>
        <p className="my-4">We do not collect, use, save, share, or have access to any of your personal data recorded in Jyotish Computer app.</p>
        <p className="my-4">Individual settings and data entries are stored only on your device.</p>
        <p className="my-4">If you have any questions about this Privacy Policy, feel free to contact us at <a href="mailto:info@jyotishapp.com" className="text-blue-600">info@jyotishapp.com</a>.</p>
      </section>
    </Layout>
  );
}

export default PrivacyPage;
