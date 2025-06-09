const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay" />
            <video
                className="hero__video"
                src="/Askendvideoloop.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="hero__content">
                <div className="hero__text">
                    <h1>Ain’t no mountain high enough</h1>
                    <h4>
                        Building secure digital services that hold up to the challenges the future might bring.
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
