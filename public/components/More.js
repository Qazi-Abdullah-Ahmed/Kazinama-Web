function More() {
    const socialLinks = [
        { id: 1, name: 'Patreon', icon: 'fa-patreon', url: '#', description: 'Get exclusive content' },
        { id: 2, name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/therealkazinama/', description: 'Follow my journey' },
        { id: 3, name: 'Spotify', icon: 'fa-spotify', url: 'https://open.spotify.com/artist/0FpO7hbnI5X094KWa9uvR8', description: 'Listen to my music' },
        { id: 4, name: 'YouTube', icon: 'fa-youtube', url: 'https://www.youtube.com/@iamkazinama', description: 'Watch my videos' }
    ];

    return (
        <section id="more" data-name="more-section" className="section bg-[#121212] py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="text-[#FFD700]">Connect</span> With Me
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {socialLinks.map(link => (
                        <div
                            key={link.id}
                            data-name={`social-card-${link.id}`}
                            className="transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <a 
                                href={link.url} 
                                className="block bg-[#1A1A1A] rounded-lg p-6 text-center hover:bg-[#252525] transition-colors duration-300"
                            >
                                <div className="relative w-16 h-16 mx-auto mb-4 group">
                                    <div className="absolute inset-0 bg-[#FFD700] rounded-full opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <i className={`fab ${link.icon} text-4xl text-[#FFD700] transform group-hover:scale-110 transition-transform duration-300`}></i>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{link.name}</h3>
                                <p className="text-gray-400">{link.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
