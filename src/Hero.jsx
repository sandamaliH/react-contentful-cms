import heroImg from './assets/hero.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="header image" className='img' />
                </div>
            </div>
        </section>
    );
};

export default Hero;