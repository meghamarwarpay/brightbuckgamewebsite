

import Image from 'next/image';
import Link from 'next/link';
import img from '../../assets/image/join-image.png';

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <div className="heading">
              <h2 className="h1 mb-3">Join Brightbuck11 Platform</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="join-image text-center">
              <Image 
                src={img} 
                width={400} 
                height={300} // Adjust height based on your needs
                alt="Join Brightbuck11" 
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-3">Play Game and Earn Money</h3>
            <p>
              Join the Platform and earn to revshare! Are you an experienced 
              Cricket player and would like to set up your own rules? We are 
              happy to get to know you and offer. Partner with us and earn as 
              your referrals start playing!
            </p>
            <div className="mt-4">
              <Link href="/comming" className="btn-style">Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
