function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav data-name="navbar" className="bg-[#121212] border-b border-[#333] fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex items-center justify-center space-x-12 custom-navbar-font text-[3.1rem]">
                            <a href="/" data-name="home-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">HOME</a>
                            <a href="/#music" data-name="music-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">MUSIC</a>
                            <a href="/#personal-videos" data-name="music-videos-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">VIDEOS</a>
                            <a href="/press.html" data-name="press-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">PRESS</a>
                            <a href="/merch.html" data-name="merch-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">MERCH</a>
                            <a href="/#donation" data-name="donation-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">SUPPORT</a>
                            <a href="/#more" data-name="more-link" className="text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">CONNECT</a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            data-name="mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] transition-colors duration-300"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div data-name="mobile-menu" className="md:hidden bg-[#1A1A1A] border-t border-[#333]">
                    <div className="px-2 pt-2 pb-3 space-y-1 custom-navbar-font">
                        <a href="/" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">HOME</a>
                        <a href="/#music" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">MUSIC</a>
                        <a href="/#personal-videos" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">VIDEOS</a>
                        <a href="/press.html" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">PRESS</a>
                        <a href="/merch.html" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">MERCH</a>
                        <a href="/#donation" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">SUPPORT</a>
                        <a href="/#more" className="block px-3 py-2 text-white hover:text-[#FFD700] transition-colors duration-300 text-[3.1rem] uppercase tracking-wide">CONNECT</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
