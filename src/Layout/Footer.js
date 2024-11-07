// components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/image/logo/logo.png';
const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12 col-md-2 d-flex justify-content-center align-items-center">
    <div className="foot-logo text-center">
        <Image 
            src={logo}
            alt="footer_logo" 
            width={150} // Specify the width you want
            height={50} // Specify the height you want
        />
    </div>
</div>

                    <div className="col-lg-9 col-md-10 mx-auto">
                        <ul className="foot-links text-center">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/#about">About Us</Link></li>
                            <li><Link href="/#games">How To Play</Link></li>
                            <li><Link href="/#contact">Contact Us</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/refund">Refund & Cancellation</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row top-border mt-3 pt-3">
                    <div className="col-lg-2 col-md-2">
                        <div className="foot-contact-detail text-center">
                            <Link href="tel:+919649481857">
                                <i className="fa fa-phone" aria-hidden="true"></i> 9649481857
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="foot-contact-detail text-center">
                            <Link href="mailto:brightbuckpvtltd@gmail.com">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                brightbuckpvtltd@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="foot-contact-detail text-center">
                            <Link href="#0">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> 
                                CABIN NO. A & B OFFICE NO. 4 T.T VEST APARTMENT  P.N 33 HEERA NAGAR, A VAISHALI NAGAR, JAIPUR, JAIPUR, RAJASTHAN 302012
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
