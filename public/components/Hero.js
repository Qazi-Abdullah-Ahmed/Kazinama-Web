function Hero() {
    return (
        <div data-name="hero" className="hero-gradient text-white py-20">
            <div className="container mx-auto text-center">
                <h1 data-name="hero-title" className="text-5xl font-bold mb-6">Welcome to My World of Music</h1>
                <p data-name="hero-subtitle" className="text-xl mb-8">Experience the magic of live performances</p>
                <a 
                    href="#booking" 
                    data-name="cta-button"
                    className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                    Book Now
                </a>
            </div>
        </div>
    );
}
