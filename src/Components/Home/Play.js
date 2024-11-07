// components/HowToPlay.js

import Image from 'next/image';
import cricketImage from '../../assets/image/cricket.png'; // Adjust the path based on your project structure

const Play = () => {
    return (
        <section className="start-game" id="games">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="heading">
                            <h2 className="h1">How To Play</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-6 my-4">
                                <div className="game-step-wrapper">
                                    <div className="game-step">1</div>
                                    <div className="game-step-text">Register Yourself & Win Free Credits</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className="game-step-wrapper">
                                    <div className="game-step">2</div>
                                    <div className="game-step-text">Select a Match of Your Choice</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className="game-step-wrapper">
                                    <div className="game-step">3</div>
                                    <div className="game-step-text">Create Your Fantasy Team</div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className="game-step-wrapper">
                                    <div className="game-step">4</div>
                                    <div className="game-step-text">Play in Cash Contests & Win</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <Image src={cricketImage} width={400} alt="Cricket" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Play;
