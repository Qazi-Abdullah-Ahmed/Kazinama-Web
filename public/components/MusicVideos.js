function MusicVideos() {
    const [selectedVideo, setSelectedVideo] = React.useState(null);
    const [showShareModal, setShowShareModal] = React.useState(false);

    // To add more videos:
    // 1. Get the video ID from YouTube URL (it's the part after "v=")
    // 2. Add a new object to this array with:
    //    - id: YouTube video ID
    //    - title: Video title
    //    - description: Video description
    //    - thumbnail: Will be auto-generated using the video ID
    const videos = [
        {
            id: 'VZXG8ESmMEk',
            title: 'Nusrat Fateh Ali Khan - Kiven Mukhre Ton | Kazinama | Official Music Video by Mohammed AL Balushi',
            description: "Had to re-upload the video because of some quality issues. Feel free to shower it with comments and likes like you did last time I'd totally 😄",
            thumbnail: `https://img.youtube.com/vi/VZXG8ESmMEk/maxresdefault.jpg`
        },
        {
            id: 'J0_X4yHWDTc',
            title: 'Musarrat Nazir - Ahista Ahista | Kazinama | Various Anime',
            description: 'Love flourishes in the garden of nurturing hearts..',
            thumbnail: `https://img.youtube.com/vi/J0_X4yHWDTc/maxresdefault.jpg`
        },
        {
            id: 'I3Xujf73o2A',
            title: 'Kazinama - Latest Performance',
            description: '',
            thumbnail: `https://img.youtube.com/vi/I3Xujf73o2A/maxresdefault.jpg`
        }
    ];

    const handleShare = () => {
        try {
            if (navigator.share) {
                navigator.share({
                    title: selectedVideo.title,
                    text: selectedVideo.description,
                    url: `https://youtube.com/watch?v=${selectedVideo.id}`
                });
            } else {
                setShowShareModal(true);
            }
        } catch (error) {
            reportError(error);
            setShowShareModal(true);
        }
    };

    const copyToClipboard = (text) => {
        try {
            navigator.clipboard.writeText(text);
            alert('Link copied to clipboard!');
            setShowShareModal(false);
        } catch (error) {
            reportError(error);
            alert('Failed to copy link');
        }
    };

    return (
        <section id="personal-videos" data-name="videos-section" className="min-h-screen bg-[#0a0a0a] py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="text-[#FFD700]">My</span> Videos
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Video List - Takes 5 columns */}
                    <div className="lg:col-span-5 space-y-4">
                        {videos.map(video => (
                            <div
                                key={video.id}
                                data-name={`video-item-${video.id}`}
                                className={`bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer transition-all hover:bg-[#252525] ${
                                    selectedVideo?.id === video.id ? 'border-2 border-[#FFD700]' : ''
                                }`}
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="relative">
                                    <img 
                                        src={video.thumbnail} 
                                        alt={video.title}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                        <i className="fas fa-play text-white text-4xl opacity-80"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Video Player and Details - Takes 7 columns */}
                    <div className="lg:col-span-7">
                        {selectedVideo ? (
                            <div className="bg-[#1A1A1A] rounded-lg overflow-hidden h-full">
                                <div className="relative">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                                            title={selectedVideo.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        ></iframe>
                                    </div>
                                    <button
                                        onClick={handleShare}
                                        className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                                    >
                                        <i className="fas fa-share-alt"></i>
                                    </button>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-4">{selectedVideo.title}</h3>
                                    <p className="text-gray-300">{selectedVideo.description}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-[#1A1A1A] rounded-lg flex items-center justify-center h-[500px]">
                                <p className="text-gray-400">Select a video to play</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Share Modal */}
                {showShareModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-[#1A1A1A] rounded-lg p-6 max-w-md w-full mx-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Share Video</h3>
                                <button 
                                    onClick={() => setShowShareModal(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=https://youtube.com/watch?v=${selectedVideo.id}&text=${encodeURIComponent(selectedVideo.title)}`, '_blank')}
                                        className="flex-1 bg-[#1DA1F2] text-white p-2 rounded hover:bg-opacity-90"
                                    >
                                        <i className="fab fa-twitter mr-2"></i>
                                        Twitter
                                    </button>
                                    <button
                                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=https://youtube.com/watch?v=${selectedVideo.id}`, '_blank')}
                                        className="flex-1 bg-[#4267B2] text-white p-2 rounded hover:bg-opacity-90"
                                    >
                                        <i className="fab fa-facebook mr-2"></i>
                                        Facebook
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={`https://youtube.com/watch?v=${selectedVideo.id}`}
                                        readOnly
                                        className="flex-1 bg-[#252525] text-white p-2 rounded"
                                    />
                                    <button
                                        onClick={() => copyToClipboard(`https://youtube.com/watch?v=${selectedVideo.id}`)}
                                        className="bg-[#FFD700] text-black px-4 rounded hover:bg-opacity-90"
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
