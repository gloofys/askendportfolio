const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero__overlay" />
            <video
                className="hero__video"
                src="/Askendvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/askendVideoFirstFrame.jpg"
            />
            <div className="hero__content">
                <div className="hero__text">
                    <h1>Code that moves mountains</h1>
                    <h4>
                        Bringing robust, well-crafted solutions — ready to help your company conquer its next challenge.
                    </h4>
                </div>
                <div className="altimeter">
                    <div className="altimeter-main-container">
                        {/* Static reference layer */}
                        <div className="altimeter-container">
                            <div className="altimeter-item gold"></div>
                            <div className="altimeter-item black-white"></div>
                        </div>

                        {/* Animated rotating layer */}
                        <div className="altimeter-container movable">
                            <div className="altimeter-item black"></div>
                            <div className="altimeter-item primary"></div>
                            <div className="altimeter-item primary-blue"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
};

export default Hero;
