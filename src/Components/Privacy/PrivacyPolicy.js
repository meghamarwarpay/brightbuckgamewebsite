// components/PrivacyPolicy.js

const PrivacyPolicy = () => {
    return (
      <section className="policy-content py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="heading">
                <h2 className="h1 mb-3">Privacy Policy</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-dark">Introduction</h3>
              <p className="text-dark">
                Welcome to Brightbuck Private Limited  This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you access or use our website.
              </p>
              <h3 className="mt-4 text-dark">Information We Collect</h3>
              <p>
                <strong className="text-dark">Personal Information</strong>
              </p>
              <p className="text-dark">
                We may collect personal information that you provide voluntarily, such as:
              </p>
              <ul>
                <li className="text-dark">Your username</li>
                <li className="text-dark">Email address</li>
                <li className="text-dark">Date of birth</li>
                <li className="text-dark">Payment information (if applicable)</li>
              </ul>
              <p className="mt-3">
                <strong className="text-dark">Other Personal Information:</strong>
              </p>
              <ul>
                <li className="text-dark">Name</li>
                <li className="text-dark">Date of birth</li>
                <li className="text-dark">Telephone number</li>
                <li className="text-dark">Postal/contact address</li>
                <li className="text-dark">PAN number (if applicable)</li>
              </ul>
  
              <h3 className="mt-3 text-dark">How We Use Your Information</h3>
              <p className="text-dark">We use the collected information for the following purposes:</p>
              <ul>
                <li className="text-dark">To provide and improve our services</li>
                <li className="text-dark">To personalize your experience</li>
                <li className="text-dark">To process payments (if applicable)</li>
              </ul>
              <p className="text-dark">
                We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
              </p>
  
              <h3 className="mt-3 text-dark">Security</h3>
              <p className="text-dark">
                We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PrivacyPolicy;
  