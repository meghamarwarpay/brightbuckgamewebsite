import Image from 'next/image';
import img from '../../assets/image/earn-money.png'
import img1 from '../../assets/image/withdraw.png'
import img2 from '../../assets/image/fair-play.png'
import img3 from '../../assets/image/secure.png'
const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="heading">
                            <h2 className="h1">Features We Provide</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 mt-3">
                        <div className="single-feature">
                            <div className="feature-icon">
                                <Image src={img} alt="Earn Real Money" width={100} height={100} />
                            </div>
                            <h3>Earn Real Money</h3>
                            <p>Play Cricket Online to Earn Real Money.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-3">
                        <div className="single-feature">
                            <div className="feature-icon">
                                <Image src={img1} alt="Instant Withdrawal" width={100} height={100} />
                            </div>
                            <h3>Instant Withdrawal</h3>
                            <p>You can get your money in Just One click withdrawal.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-3">
                        <div className="single-feature">
                            <div className="feature-icon">
                                <Image src={img2} alt="Fair Game Play" width={100} height={100} />
                            </div>
                            <h3>Fair Game Play</h3>
                            <p>Brightbuck11 assures each & every game to be Fair.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-3">
                        <div className="single-feature">
                            <div className="feature-icon">
                                <Image src={img3} alt="Secure" width={100} height={100} />
                            </div>
                            <h3>Secure</h3>
                            <p>Brightbuck11 is 100% Safe & Secure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
