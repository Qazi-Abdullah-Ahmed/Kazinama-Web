function App() {
    const [selectedSong, setSelectedSong] = React.useState(null);

    React.useEffect(() => {
        window.playSelectedSong = (index) => {
            setSelectedSong(index);
        };
    }, []);

    return (
        <div data-name="app" className="bg-[#121212] pb-20">
            <Navbar />
            <Home />
            <Music />
            <MusicVideos />
            {/* <Photos /> */}
            <Donation />
            <More />
            <Footer />
            {selectedSong !== null && <MusicPlayer initialTrack={selectedSong} />}
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
