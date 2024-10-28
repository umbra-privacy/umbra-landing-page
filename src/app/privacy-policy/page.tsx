'use client';

export default function Support() {
  return (
    <div className="container pt-6 mx-auto flex flex-wrap flex-col items-center min-h-[calc(100vh-150px)] text-white">
      <div>
        <h1 className="text-secondary text-4xl font-semibold">
          Umbra Wallet Privacy Policy
        </h1>

        <p>Last updated: 20 sept 2024</p>
        <ul className="flex  flex-col divide-secondary divide-y ps-3 py-6">
          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">1. Introduction</h2>
            <p>
              Umbra Wallet is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you use our browser extension.
            </p>
          </li>

          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect only the information necessary to provide and improve
              our services:
            </p>

            <ul className="list-disc ps-6">
              <li>Wallet addresses</li>
              <li>Transaction data on the Aztec network</li>
              <li>Usage data to improve our user interface</li>
            </ul>
          </li>

          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information to:</p>

            <ul className="list-disc ps-6">
              <li>
                Facilitate your interactions with decentralized applications on
                the Aztec network
              </li>
              <li>Improve our wallet functionality and user experience</li>
              <li>Provide customer support</li>
            </ul>
          </li>

          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">
              4. Data Storage and Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              information. Your private keys and sensitive data are stored
              locally on your device and are never transmitted to our servers.
            </p>
          </li>

          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">
              5. Third-Party Services
            </h2>
            <p>
              Umbra Wallet may interact with third-party decentralized
              applications. We are not responsible for the privacy practices of
              these third parties.
            </p>
          </li>

          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">
              6. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </li>

          <li className="py-4">
            <h2 className="font-semibold text-2xl mb-2">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:{' '}
              <a
                href="mailto:satyamsgsits1994@gmail.com"
                className="text-secondary underline hover:no-underline"
              >
                satyamsgsits1994@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
