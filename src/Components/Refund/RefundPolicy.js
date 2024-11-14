import React from 'react'

function RefundPolicy() {
  return (
    <div>
         <section className="policy-content py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="heading">
              <h2 className="h1 mb-3">Refund and Cancellation Policy</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-dark">Refund Policy</h3>
            <p className="text-dark">
              We at Brightbuck Private Limited strive to ensure your satisfaction with our services. However, we understand that there may be instances where you need to request a refund. Please review our refund policy below:
            </p>
            <h4 className="mt-4 text-dark">Refund Eligibility:</h4>
            <p>Refunds are only applicable for purchases made directly through our website.</p>
            <p>Refunds must be requested within 14 days of purchase.</p>
            <p>Refunds are not applicable for in-game purchases, virtual goods, or items that have already been redeemed.</p>

            <h4 className="mt-4 text-dark">Refund Process:</h4>
            <p>
              To request a refund, please contact our customer support team at{' '}
              <a href="mailto:brightbuckpvtltd@gmail.com">brightbuckpvtltd@gmail.com</a> with your purchase details.
            </p>
            <p>Our team will review your request and, if eligible, process the refund within 7-10 business days.</p>

            <h4 className="mt-4 text-dark">Refund Method:</h4>
            <p>Refunds will be issued via the original payment method used for the purchase.</p>
            <p>Refunds for purchases made via credit/debit card may take 3-5 business days to reflect in your account.</p>

            <br />
            <br />

            <h3 className="text-dark">Cancellation Policy</h3>
            <h4 className="mt-4">Cancellation by User:</h4>
            <p>You may cancel your subscription or service at any time by contacting our customer support team.</p>
            <p>Cancellations must be requested at least 24 hours before the next billing cycle to avoid being charged for the next period.</p>

            <h4 className="mt-4 text-dark">Cancellation by Fantasy Gaming:</h4>
            <p>
              We reserve the right to cancel or suspend your account or services at any time for violation of our terms of service or for any other reason deemed necessary by Fantasy Gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default RefundPolicy