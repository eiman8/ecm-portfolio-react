
function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title"> Hey, I'm Eimanson</p>
                    <h1 className="hero-section-title"><span className="hero-section-title-color">Website</span>{" "}
                    <br />
                    Developer
                    </h1>
                    <p className="hero-section-description">
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                        An aspiring web developer which aims to build beautiful and responsive web designs. 
                        <br />
                        <br />
                        Get to know more about me.
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero-section-image">
                {/* <img src="./img/hero_img.png" alt="Hero Section" /> */}
            </div>
        </section>
    )
}

export default HeroSection;