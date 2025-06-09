function MusicPlayer({ initialTrack }) {
    const [currentTrackIndex, setCurrentTrackIndex] = React.useState(initialTrack);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [error, setError] = React.useState(null);
    const audioRef = React.useRef(null);

    // Using secure URLs that will be handled by your backend
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
            duration: "3:18",
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

    React.useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;

            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration);
                setError(null);
            });
            audio.addEventListener('ended', () => playNext());
            audio.addEventListener('error', handleAudioError);

            // Disable right-click on audio element
            audio.addEventListener('contextmenu', (e) => e.preventDefault());

            audio.load();
            if (isPlaying) {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        reportError(error);
                        setError("Playback failed. Please try again.");
                        setIsPlaying(false);
                    });
                }
            }

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('error', handleAudioError);
                audio.removeEventListener('contextmenu', (e) => e.preventDefault());
            };
        }
    }, [currentTrackIndex]);

    const handleAudioError = (e) => {
        try {
            const errorMessage = "Unable to load audio track. Please try again later.";
            setError(errorMessage);
            setIsPlaying(false);
            reportError(new Error(`Audio error: ${e.message}`));
        } catch (error) {
            reportError(error);
        }
    };

    const updateProgress = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = () => {
        try {
            if (!audioRef.current.src) {
                setError("No audio source available");
                return;
            }

            if (isPlaying) {
                audioRef.current.pause();
            } else {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        reportError(error);
                        setError("Playback failed. Please try again.");
                    });
                }
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            reportError(error);
            setError("Playback error occurred");
        }
    };

    const playNext = () => {
        try {
            setCurrentTrackIndex((prevIndex) => 
                prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
            );
            setIsPlaying(true);
            setError(null);
        } catch (error) {
            reportError(error);
            setError("Error changing track");
        }
    };

    const playPrevious = () => {
        try {
            setCurrentTrackIndex((prevIndex) => 
                prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
            );
            setIsPlaying(true);
            setError(null);
        } catch (error) {
            reportError(error);
            setError("Error changing track");
        }
    };

    const handleSeek = (e) => {
        try {
            const seekTime = (e.target.value / 100) * duration;
            audioRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        } catch (error) {
            reportError(error);
            setError("Error seeking track position");
        }
    };

    return (
        <div data-name="music-player" className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#333] p-4">
            <audio
                ref={audioRef}
                src={playlist[currentTrackIndex].url}
                preload="auto"
                controlsList="nodownload noplaybackrate"
                onContextMenu={(e) => e.preventDefault()}
            />
            <div className="container mx-auto max-w-4xl">
                {error && (
                    <div className="text-red-500 text-sm mb-2 text-center">
                        {error}
                    </div>
                )}
                <div className="flex items-center justify-between">
                    {/* Track Info */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#333] flex items-center justify-center">
                            <i className="fas fa-music text-[#FFD700]"></i>
                        </div>
                        <div>
                            <h4 className="text-white font-medium">{playlist[currentTrackIndex].title}</h4>
                            <p className="text-gray-400 text-sm">{playlist[currentTrackIndex].artist}</p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-6">
                        <button 
                            onClick={playPrevious}
                            className="text-white hover:text-[#FFD700] transition-colors"
                            aria-label="Previous track"
                        >
                            <i className="fas fa-backward text-xl"></i>
                        </button>
                        <button 
                            onClick={togglePlay}
                            className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center hover:bg-[#FFE44D] transition-colors"
                            aria-label={isPlaying ? "Pause" : "Play"}
                            disabled={!!error}
                        >
                            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-black`}></i>
                        </button>
                        <button 
                            onClick={playNext}
                            className="text-white hover:text-[#FFD700] transition-colors"
                            aria-label="Next track"
                        >
                            <i className="fas fa-forward text-xl"></i>
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center space-x-3 w-1/3">
                        <span className="text-gray-400 text-sm">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            value={(currentTime / duration) * 100 || 0}
                            onChange={handleSeek}
                            className="w-full h-1 bg-[#333] rounded-full appearance-none cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, #FFD700 ${(currentTime / duration) * 100}%, #333 ${(currentTime / duration) * 100}%)`
                            }}
                            disabled={!!error}
                        />
                        <span className="text-gray-400 text-sm">{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
