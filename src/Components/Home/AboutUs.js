// components/AboutUs.js

import Image from 'next/image';
import img from '../../assets/image/about.png';
const AboutUs = () => {
    return (
        <section className="about-us" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="heading">
                            <h2 className="h1">About Us</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-6 text-center">
                        <Image
                            src={img} // Adjust the path according to your public folder structure
                            width={500}
                            height={500} // Use height to maintain aspect ratio
                            alt="cricket"
                        />
                    </div>
                    <div className="col-lg-6 mt-3">
                        <h2 className="mb-4">Play Fantasy Cricket on Brightbuck11</h2>
                        <p>
                            Want to enjoy fantasy games like cricket but just can`t manage the time? Well, Brightbuck11 is the
                            answer you need. This is the place where your favorite fantasy sports come alive. Enjoy playing
                            fantasy cricket right on your device. Pick teams of your choice and play the game.
                        </p>
                        <p>
                            At this platform, We Provide only the best UI and Support completely with passion simplicity and
                            creativity!
                        </p>
                        <p>
                            Fantasy cricket is a strategy-based online sports game where players create a virtual team of
                            real cricketers playing in real matches worldwide. You earn points based on the performances of
                            these players in actual matches. In a fantasy cricket match, you can create a team by choosing
                            11 players where you can pick a maximum of 7 players from any one team, playing the real-life
                            match.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
