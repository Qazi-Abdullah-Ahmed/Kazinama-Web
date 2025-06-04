function Music() {
    const playlist = [
        {
            id: 1,
            title: "Ahista Ahista",
            artist: "Kazinama",
            duration: "2:57",
            url: "/tracks/Kazinama-Ahista-Ahista.mp3"
        },
        {
            id: 2,
            title: "Kiven Mukhre",
            artist: "Kazinama",
            duration: "3:20",
            url: "/tracks/Kazinama-Kiven-Mukhre.mp3"
        },
        {
            id: 3,
            title: "Tauba Tauba",
            artist: "Kazinama",
            duration: "3:55",
            url: "/tracks/Kazinama-Tauba-Tauba.mp3"
        },
        {
            id: 4,
            title: "Soda Water",
            artist: "Kazinama",
            duration: "1:39",
            url: "/tracks/Kazinama-Soda-Water.mp3"
        },
        {
            id: 5,
            title: "Kabhi Tanhayion Main Bhi",
            artist: "Kazinama",
            duration: "3:54",
            url: "/tracks/Kazinama-Kabhi-Tanhayion-Main-bhi.mp3"
        }
    ];

    return (
        <section id="music" data-name="music-section" className="min-h-screen flex items-center bg-[#0a0a0a] py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="text-[#FFD700]">MUSIC</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                    {playlist.map((song, index) => (
                        <div
                            key={song.id}
                            data-name={`song-item-${song.id}`}
                            className="bg-[#1A1A1A] p-4 mb-4 rounded hover:bg-[#252525] transition-colors cursor-pointer"
                            onClick={() => window.playSelectedSong(index)}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-[#333] flex items-center justify-center rounded">
                                        <i className="fas fa-music text-[#FFD700]"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium">{song.title}</h3>
                                        <p className="text-gray-400 text-sm">{song.artist}</p>
                                    </div>
                                </div>
                                <div className="text-gray-400">{song.duration}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
