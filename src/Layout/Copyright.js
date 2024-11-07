import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Copyright = () => {
    return (
        <div className="copyright">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 text-center text-lg-start">
                        <p>&copy; {new Date().getFullYear()} BRIGHTBUCK INFOTECH SOLUTION LLP</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="foot-social-icons text-center text-lg-end my-2">
                            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></Link>
                            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
