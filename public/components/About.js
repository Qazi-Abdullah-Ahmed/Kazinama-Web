function About() {
    return (
        <section id="about" data-name="about-section" className="section bg-white">
            <div className="container">
                <h2 data-name="about-title" className="text-3xl font-bold mb-8 text-center">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div data-name="about-image" className="rounded-lg overflow-hidden">
                        <img 
                            src="/photos/MainPhoto.JPG" 
                            alt="Artist profile" 
                            className="w-full h-auto"
                        />
                    </div>
                    <div data-name="about-content">
                        <p className="text-lg mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-lg mb-4">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900">
                                <i className="fab fa-spotify"></i>
                            </a>
                            <a href="#" className="text-2xl text-gray-600 hover:text-gray-900">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
