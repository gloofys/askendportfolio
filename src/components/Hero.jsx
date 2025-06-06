const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay"/>
            <video
                className="hero__video"
                src="/Askendvideoloop.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="hero__content">
                <h1>Ain’t no mountain high enough</h1>
                <h4>
                    Building secure digital services that hold up to the challenges the future might bring.
                </h4>
            </div>
        </section>

    );
};
export default Hero;