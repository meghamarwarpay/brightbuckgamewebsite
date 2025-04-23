import Link from 'next/link';
import React from 'react';

function TermsAndConditions() {
  return (
    <div>
      <section className="policy-content py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="heading">
                <h2 className="h1 mb-3">Terms and Conditions</h2>
                {/* <p className="text-muted">Effective Date: April 23, 2025</p> */}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
              <h4 className="text-dark">1. Acceptance of Terms</h4>
              <p>
                By creating an account or using our gaming platform, you agree to these Terms and Conditions. If you do not agree, please refrain from using our website or services.
              </p>

              <h4 className="mt-4 text-dark">2. Description of Service</h4>
              <p>
                Our platform provides online gaming experiences, fantasy leagues, virtual competitions, and in-game purchases. We may add, remove, or modify features without prior notice.
              </p>

              <h4 className="mt-4 text-dark">3. User Accounts</h4>
              <p>To use our services, you must register and maintain an active account. You agree to:</p>
              <ul>
                <li>Provide accurate and current information.</li>
                <li>Keep your login credentials secure.</li>
                <li>Not share your account with others or use someone else’s account.</li>
              </ul>

              <h4 className="mt-4 text-dark">4. In-Game Currency & Virtual Goods</h4>
              <p>
                Virtual items and currency (coins, gems, etc.) are non-refundable and hold no real-world value. They may not be exchanged outside the platform.
              </p>
              <p>
                We reserve the right to modify, suspend, or eliminate virtual items without notice or liability.
              </p>

              <h4 className="mt-4 text-dark">5. Conduct and Fair Play</h4>
              <p>Users must:</p>
              <ul>
                <li>Follow fair play guidelines and game rules.</li>
                <li>Not exploit bugs, cheat, or use unauthorized software or bots.</li>
                <li>Respect other players; abusive behavior will result in suspension.</li>
              </ul>

              <h4 className="mt-4 text-dark">6. Payments and Refunds</h4>
              <p>
                All purchases made on the platform are final. Refunds are only granted under specific circumstances as outlined in our{' '}
                <Link href= "/refund">Refund Policy</Link>.
              </p>

              <h4 className="mt-4 text-dark">7. Suspension and Termination</h4>
              <p>
                We reserve the right to suspend or permanently terminate any account for rule violations, fraud, abuse, or any harmful behavior without prior warning.
              </p>

              <h4 className="mt-4 text-dark">8. Intellectual Property</h4>
              <p>
                All graphics, game content, branding, and code are the property of Brightbuck Private Limited. You may not reuse or reproduce them without written consent.
              </p>

              <h4 className="mt-4 text-dark">9. Changes to the Terms</h4>
              <p>
                These terms may be updated at any time. We encourage users to review them periodically. Continued use of the platform implies acceptance of any changes.
              </p>

              <h4 className="mt-4 text-dark">10. Governing Law</h4>
              <p>
                These terms are governed by the laws of India. All legal matters shall be resolved under the jurisdiction of the courts located in [Your City/State].
              </p>

              <h4 className="mt-4 text-dark">11. Contact Us</h4>
              <p>
                For any questions or concerns, reach out to us at:{' '}
                <a href="mailto:brightbuckpvtltd@gmail.com">brightbuckpvtltd@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;
