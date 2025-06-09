function Press() {
    const [selectedType, setSelectedType] = React.useState('all');
    const [hoveredItem, setHoveredItem] = React.useState(null);

    const pressItems = [
        {
            id: 1,
            type: 'interview',
            title: 'The nostalgia in Ahista made it resonate, says Kazinama',
            publication: 'Deccan Chronicle',
            date: '17 Feburary 2025',
            image: '/photos/kazinamamain.png',
            excerpt: 'In an exclusive interview to Deccan Chronicle, Kazinama traces his musical journey from his Youtube days to his latest chartbuster, and explains why music lovers connected with ‘Ahista Ahista’',
            link: 'https://www.deccanchronicle.com/entertainment/music/kazinama-on-ahista-ahista-becoming-a-insta-viral-sensation-1861749'
        },
        {
            id: 2,
            type: 'article',
            title: "Ahista Ahista composer Kazinama: People didn’t know about Musarrat Nazir at all",
            publication: 'Hindustan Times',
            date: '03 March 2025',
            image: '/photos/Kazinama-Hidustan-Times-Press.jpg',
            excerpt: 'Ahista Ahista compose Kazinama, who recreated the 80s classic that went viral on Instagram reels, talks about its popularity and his take on recreations',
            link: 'https://www.hindustantimes.com/htcity/cinema/ahista-ahista-composer-kazinama-people-didn-t-know-about-musarrat-nazir-at-all-101740979248421.html'
        },
        {
            id: 3,
            type: 'feature',
            title: 'Kazinama Talks Putting a Funky Spin on Classics Like ‘Ahista Ahista’',
            publication: 'Rolling Stone India',
            date: '20 Feburary 2025',
            image: '/photos/Kazinama-RollingStones.jpg',
            excerpt: 'Qazi Waseem Ahmed recently released a club-friendly rendition of ‘Darna Mohabbat Karle’ from the 1949 film ‘Andaz,’ originally sung by Shamshad Begum and Lata Mangeshkar and composer Naushad',
            link: 'https://rollingstoneindia.com/kazinama-ahista-song-interview/'
        }
    ];

    const filteredItems = selectedType === 'all' 
        ? pressItems 
        : pressItems.filter(item => item.type === selectedType);

    return (
        <section id="press" data-name="press-section" className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-[3rem] mb-12 text-center">
                    <span className="text-[#FFD700]">Press</span> Coverage
                </h2>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-[#1A1A1A] p-1 rounded-full shadow-xl">
                        {['all', 'interview', 'article', 'feature'].map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                                    selectedType === type
                                        ? 'bg-[#FFD700] text-black font-semibold shadow-lg'
                                        : 'text-white hover:text-[#FFD700]'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Press Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            data-name={`press-item-${item.id}`}
                            className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-semibold capitalize">
                                        {item.type}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-[#FFD700] text-sm mb-2">{item.publication} • {item.date}</p>
                                <h4 className="text-[1rem] mb-3 text-white">{item.title}</h4>
                                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                                <a 
                                    href={item.link}
                                    className="inline-flex items-center text-[#FFD700] hover:text-[#FFC800] transition-colors duration-300"
                                >
                                    Read More 
                                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
