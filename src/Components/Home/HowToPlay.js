// components/HowToPlay.js
import React from 'react';

const HowToPlay = () => {
    return (
        <section className="how-to-play py-8">
            <div className="container mx-auto px-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="heading">
                            <h2 className="h1">Play Fantasy Cricket and win real cash!</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 my-3 text-center">
                        <div className="play-step">
                            <span className="play-step-sn text-xl font-bold">1</span>
                            <p>Create your Fantasy Cricket Team for TATA IPL, World Cup, and T20 Cricket.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3 text-center">
                        <div className="play-step">
                            <span className="play-step-sn text-xl font-bold">2</span>
                            <p>You can create teams for the upcoming real-life cricket matches</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 my-3 text-center">
                        <div className="play-step">
                            <span className="play-step-sn text-xl font-bold">3</span>
                            <p>Join contests with crores of other fans</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToPlay;
