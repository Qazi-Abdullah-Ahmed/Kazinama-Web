function Home() {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const shortDescription = `Kazinama is an independent artist known for blending nostalgic melodies with modern soundscapes and captivating, story-driven visuals. With millions of monthly Spotify listeners and millions of streams and views across YouTube and other streaming platforms, his music resonates with audiences around the world.`;

    const fullDescription = `Kazinama is an independent artist known for blending nostalgic melodies with modern soundscapes and captivating, story-driven visuals. With millions of monthly Spotify listeners and millions of streams and views across YouTube and other streaming platforms, his music resonates with audiences around the world.

Celebrated by fans and applauded by celebrities across the globe, Kazinama's journey began as a guitar and bass player, performing over 1,100 shows internationally alongside various artists. Now stepping into the spotlight, he's launched his solo live act—Kazinama Live—a dynamic fusion of DJ performance and a hybrid live band.

For updates, live shows, and new releases, stay tuned—and dive into his world of sound. Kazinama is an independent artist known for blending nostalgic melodies with modern soundscapes and captivating, story-driven visuals. With millions of monthly Spotify listeners and millions of streams and views across YouTube and other streaming platforms, his music resonates with audiences around the world.

Celebrated by fans and applauded by celebrities across the globe, Kazinama's journey began as a guitar and bass player, performing over 1,100 shows internationally alongside various artists. Now stepping into the spotlight, he's launched his solo live act—Kazinama Live—a dynamic fusion of DJ performance and a hybrid live band.

For updates, live shows, and new releases, stay tuned—and dive into his world of sound.`;

    return (
        <section id="home" data-name="home-section" className="hero-gradient min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-name="home-content" className="text-center md:text-left">
                        <h1 className="text-[9rem] h-[180px]">
                            <span className="text-[#FFD700]">KAZINAMA</span>
                        </h1>
                        
                        <div className="relative">
                            <p className={`text-gray-300 mb-6 transition-all duration-500 ${
                                isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                            }`}>
                                {isExpanded ? fullDescription : shortDescription}
                            </p>
                            
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-[#FFD700] hover:text-[#FFC800] transition-colors duration-300 flex items-center gap-2 mx-auto md:mx-0"
                            >
                                {isExpanded ? (
                                    <>
                                        Read Less
                                        <i className="fas fa-chevron-up"></i>
                                    </>
                                ) : (
                                    <>
                                        Read More
                                        <i className="fas fa-chevron-down"></i>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
                            <a 
                                href="https://open.spotify.com/artist/0FpO7hbnI5X094KWa9uvR8" 
                                className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FFC800] transition-colors duration-300"
                            >
                                Listen Now
                            </a>
                            <a 
                                href="#more" 
                                className="border-2 border-[#FFD700] text-[#FFD700] px-6 py-2 rounded-full hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                            >
                                Connect
                            </a>
                        </div>

                        {/* Social Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="bg-[#1A1A1A]/50 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-[#FFD700] text-2xl font-bold">1.1K+</div>
                                <div className="text-gray-400 text-sm">Live Shows</div>
                            </div>
                            <div className="bg-[#1A1A1A]/50 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-[#FFD700] text-2xl font-bold">1.5M+</div>
                                <div className="text-gray-400 text-sm">Monthly Listeners</div>
                            </div>
                            <div className="bg-[#1A1A1A]/50 p-4 rounded-lg backdrop-blur-sm">
                                <div className="text-[#FFD700] text-2xl font-bold">25M+</div>
                                <div className="text-gray-400 text-sm">Total Streams</div>
                            </div>
                        </div>
                    </div>
                    <div data-name="home-image" className="rounded-lg overflow-hidden shadow-xl relative group">
                        <img 
                            src="/photos/kazinamamain.png" 
                            alt="Kazinama profile" 
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
