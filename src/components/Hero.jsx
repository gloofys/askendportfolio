const Hero = () => {
    return (
        <section className="hero-banner">
            <div className="hero-banner__overlay" />
            <iframe
                className="hero-banner__video"
                src="https://player.vimeo.com/video/947359152?background=1&autoplay=1&loop=1&muted=1"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            ></iframe>
            <div className="hero-banner__content">
                <h1>Fred Brosman</h1>
                <p>Portfolio Demo Inspired by Askend</p>
            </div>
        </section>
    );
};
export default Hero;