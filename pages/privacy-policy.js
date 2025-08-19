"use client";

import { useState } from "react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("privacy");
  const year = new Date().getFullYear();

  const tabBtnClasses = (isActive) => `
  border border-[#233252] bg-[#0f1628] px-4 py-2 rounded-lg font-semibold transition-colors
  ${
    isActive
      ? "bg-[#58a6ff] text-[#08111e] border-transparent"
      : "text-[#e9f0f7]"
  }
`;

  const sectionClasses =
    "bg-[#11182b] border border-[#233252] rounded-2xl p-7 shadow-lg";

  const h2Classes =
    "text-[clamp(20px,3vw,24px)] mt-7 text-[#d4e3f3] font-semibold";
  const h3Classes =
    "text-[clamp(16px,2.2vw,18px)] mt-6 text-[#d4e3f3] font-semibold";
  const pClasses = "leading-7 text-[#d3e0ee]";
  const ulClasses = "list-disc pl-6 space-y-1 text-[#d3e0ee]";

  return (
    <div className="min-h-screen bg-[#0b1020] text-[#e9f0f7] font-sans">
      <div className="max-w-[980px] mx-auto px-5 pt-12 pb-24">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <div className="font-bold tracking-[0.5px] text-[clamp(18px,2.5vw,22px)]">
            Inovisense
          </div>
          <nav
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Documents"
          >
            <button
              role="tab"
              aria-selected={activeTab === "privacy"}
              onClick={() => setActiveTab("privacy")}
              className={tabBtnClasses(activeTab === "privacy")}
            >
              Privacy Policy
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "terms"}
              onClick={() => setActiveTab("terms")}
              className={tabBtnClasses(activeTab === "terms")}
            >
              Terms of Service
            </button>
          </nav>
        </header>

        {/* Privacy Policy */}
        {activeTab === "privacy" && (
          <section id="privacy-policy" className={sectionClasses}>
            <div className="text-[#8aa0b6] text-sm mb-1">
              Effective Date: January 12, 2025
            </div>
            <h1 className="text-[clamp(26px,4vw,34px)] mb-2 font-bold">
              Privacy Policy
            </h1>
            <p className={pClasses}>
              Welcome to Inovisense (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our,&rdquo; &ldquo;us&rdquo;), a brand of Node7 Logic Inc.
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our
              website,{" "}
              <a
                href="https://inovisense.com/"
                className="text-[#58a6ff] hover:underline"
                rel="noopener"
              >
                https://inovisense.com/
              </a>{" "}
              (the &ldquo;Site&rdquo;). Please read this Privacy Policy
              carefully. If you do not agree with the terms of this Privacy
              Policy, please do not access the Site.
            </p>

            <h2 className={h2Classes}>Information We Collect</h2>
            <h3 className={h3Classes}>Personal Data</h3>
            <p className={pClasses}>
              Information you voluntarily provide, such as your name, email
              address, phone number, and other contact details when you fill out
              forms or communicate with us.
            </p>

            <h3 className={h3Classes}>Usage Data</h3>
            <p className={pClasses}>
              Automatically collected information, such as your IP address,
              browser type, operating system, access times, and pages viewed
              directly before and after accessing the Site.
            </p>

            <h3 className={h3Classes}>Cookies and Tracking Technologies</h3>
            <p className={pClasses}>
              We use cookies, web beacons, and other tracking technologies to
              enhance your experience on our Site. Cookies may collect
              information about your browsing behavior and preferences.
            </p>

            <h2 className={h2Classes}>How We Use Your Information</h2>
            <ul className={ulClasses}>
              <li>To operate, maintain, and improve the Site.</li>
              <li>
                To respond to inquiries, provide support, and fulfill your
                requests.
              </li>
              <li>
                To send promotional communications about our products and
                services, if you have opted to receive them.
              </li>
              <li>
                To analyze usage trends and preferences to improve user
                experience.
              </li>
              <li>
                To detect, prevent, and address technical issues or fraudulent
                activities.
              </li>
            </ul>

            <h2 className={h2Classes}>Sharing Your Information</h2>
            <p className={pClasses}>
              We do not sell or rent your personal information to third parties.
              However, we may share your information in the following
              circumstances:
            </p>
            <ul className={ulClasses}>
              <li>
                <strong>Service Providers:</strong> With vendors, consultants,
                and service providers who need access to such information to
                perform services on our behalf.
              </li>
              <li>
                <strong>Legal Obligations:</strong> When required by law, such
                as to comply with a subpoena or similar legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </li>
            </ul>

            <h2 className={h2Classes}>Authentication</h2>
            <p className={pClasses}>
              Our app uses Apple&rsquo;s Face ID technology for secure user
              authentication. Face ID is managed entirely by Apple and operates
              on the device. Our app does not collect, store, or share any
              facial recognition data.
            </p>

            <h2 className={h2Classes}>Equipment and Contract Terms</h2>
            <ul className={ulClasses}>
              <li>
                All sensors and gateways provided by Inovisense are leased to
                customers and remain the property of Inovisense throughout the
                service period.
              </li>
              <li>
                A minimum 1-year contract is required for all equipment and
                services.
              </li>
              <li>
                If equipment is returned before the 1-year contract period, a
                $150 restocking fee will apply.
              </li>
              <li>
                If equipment is not returned, a $400 equipment replacement fee
                will be charged.
              </li>
              <li>
                Customers are responsible for the care, maintenance, and timely
                return of all leased devices.
              </li>
              <li>
                <strong>
                  If equipment is purchased, it includes a 1-year warranty from
                  the date of purchase. The customer is required to maintain an
                  active app subscription during the warranty period and for as
                  long as the equipment is used for monitoring purposes.
                </strong>
              </li>
            </ul>

            <h2 className={h2Classes}>Data Security</h2>
            <p className={pClasses}>
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no electronic
              transmission or storage of information can be entirely secure.
            </p>

            <h2 className={h2Classes}>
              Disclaimer for Data Loss and Liability
            </h2>
            <p className={pClasses}>
              Inovisense is not responsible for any loss of data or damage to
              your information resulting from the use of the Site or any
              third-party services linked to the Site. Users are encouraged to
              maintain their own backups and security measures. To the fullest
              extent permitted by law, Inovisense and its parent company, Node7
              Logic Inc., disclaim all liability for any indirect, incidental,
              special, consequential, or punitive damages.
            </p>

            <h2 className={h2Classes}>Your Privacy Rights</h2>
            <ul className={ulClasses}>
              <li>Access your data and request a copy.</li>
              <li>Request corrections to your personal information.</li>
              <li>Request the deletion of your personal data.</li>
              <li>
                Opt out of certain data collection or processing activities.
              </li>
              <li>
                Lodge a complaint with a data protection authority if
                applicable.
              </li>
            </ul>

            <h2 className={h2Classes}>Third-Party Links</h2>
            <p className={pClasses}>
              The Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
            </p>

            <h2 className={h2Classes}>Children&rsquo;s Privacy</h2>
            <p className={pClasses}>
              The Site is not directed to children under the age of 13, and we
              do not knowingly collect personal information from children.
            </p>

            <h2 className={h2Classes}>Changes to This Privacy Policy</h2>
            <p className={pClasses}>
              We may update this Privacy Policy from time to time. We encourage
              you to review this Privacy Policy periodically.
            </p>

            <h2 className={h2Classes}>Contact Us</h2>
            <address className="not-italic text-[#d3e0ee]">
              <strong>Node7 Logic Inc. (Inovisense)</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:support@inovisense.com"
                className="text-[#58a6ff] hover:underline"
              >
                support@inovisense.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+18483130582"
                className="text-[#58a6ff] hover:underline"
              >
                848-313-0582
              </a>
            </address>

            <hr className="h-px bg-[#22314f] border-0 mt-4" />
            <footer className="text-[#8aa0b6] mt-7 text-sm">
              © {year} Node7 Logic Inc. All rights reserved.
            </footer>
          </section>
        )}

        {/* Terms of Service */}
        {activeTab === "terms" && (
          <section id="terms-of-service" className={sectionClasses}>
            <div className="text-[#8aa0b6] text-sm mb-1">
              Effective Date: January 12, 2025
            </div>
            <h1 className="text-[clamp(26px,4vw,34px)] mb-2 font-bold">
              Terms of Service
            </h1>

            <h2 className={h2Classes}>1. Acceptance of Terms</h2>
            <p className={pClasses}>
              By accessing or using Inovisense&rsquo;s services, website, mobile
              applications, or equipment (collectively, the
              &ldquo;Services&rdquo;), you agree to be bound by these Terms of
              Service. If you do not agree, you must not use our Services.
            </p>

            <h2 className={h2Classes}>2. Services Overview</h2>
            <p className={pClasses}>
              Inovisense provides IoT-based monitoring solutions, including
              leased or purchased sensors, gateways, and access to our
              monitoring platform.
            </p>

            <h2 className={h2Classes}>3. Equipment Use and Ownership</h2>
            <ul className={ulClasses}>
              <li>
                <strong>Leased Equipment:</strong> All leased sensors and
                gateways remain the property of Inovisense.
              </li>
              <li>
                <strong>Purchased Equipment:</strong> Purchased equipment
                becomes the property of the customer but is covered by a{" "}
                <strong>1-year warranty</strong> from the date of purchase.
              </li>
              <li>
                <strong>Active Subscription Requirement:</strong> Customers must
                maintain an active app subscription{" "}
                <strong>
                  during the warranty period and for as long as they use the
                  equipment to monitor
                </strong>
                .
              </li>
              <li>
                Customers are responsible for proper care, maintenance, and
                return (if leased) of all equipment.
              </li>
            </ul>

            <h2 className={h2Classes}>4. Contract Terms and Fees</h2>
            <ul className={ulClasses}>
              <li>
                Minimum contract term for leased equipment and services is{" "}
                <strong>1 year</strong>.
              </li>
              <li>
                Early equipment return before contract end will incur a{" "}
                <strong>$150 restocking fee</strong>.
              </li>
              <li>
                Failure to return leased equipment will result in a{" "}
                <strong>$400 replacement fee per device</strong>.
              </li>
              <li>
                Subscription fees must be paid in full and on time to maintain
                service.
              </li>
            </ul>

            <h2 className={h2Classes}>5. User Responsibilities</h2>
            <ul className={ulClasses}>
              <li>
                Provide accurate account information and update it as necessary.
              </li>
              <li>Use equipment only for intended monitoring purposes.</li>
              <li>
                Not modify, reverse engineer, or tamper with the devices or
                software.
              </li>
            </ul>

            <h2 className={h2Classes}>6. Data and Alerts</h2>
            <ul className={ulClasses}>
              <li>
                Inovisense provides monitoring data and alerts based on device
                readings.
              </li>
              <li>
                We are not responsible for losses due to missed, delayed, or
                inaccurate alerts.
              </li>
              <li>
                Users should maintain their own backup monitoring methods for
                critical applications.
              </li>
            </ul>

            <h2 className={h2Classes}>7. Limitation of Liability</h2>
            <p className={pClasses}>
              To the fullest extent permitted by law, Inovisense and Node7 Logic
              Inc. disclaim liability for any indirect, incidental, or
              consequential damages, including data loss.
            </p>

            <h2 className={h2Classes}>8. Termination</h2>
            <p className={pClasses}>
              We reserve the right to suspend or terminate services for
              non-payment, misuse of equipment, or violation of these terms.
            </p>

            <h2 className={h2Classes}>9. Changes to Terms</h2>
            <p className={pClasses}>
              We may update these Terms of Service at any time. Continued use of
              our Services after changes indicates acceptance.
            </p>

            <h2 className={h2Classes}>10. Contact Information</h2>
            <address className="not-italic text-[#d3e0ee]">
              <strong>Node7 Logic Inc. (Inovisense)</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:support@inovisense.com"
                className="text-[#58a6ff] hover:underline"
              >
                support@inovisense.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+18483130582"
                className="text-[#58a6ff] hover:underline"
              >
                848-313-0582
              </a>
            </address>

            <hr className="h-px bg-[#22314f] border-0 mt-4" />
            <footer className="text-[#8aa0b6] mt-7 text-sm">
              © {year} Node7 Logic Inc. All rights reserved.
            </footer>
          </section>
        )}
      </div>
    </div>
  );
}
