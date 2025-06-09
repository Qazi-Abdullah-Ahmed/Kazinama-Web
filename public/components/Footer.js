function Footer() {
    return (
        <footer data-name="footer" className="bg-[#1A1A1A] text-white py-12 border-t border-[#333]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Contact Info */}
                    <div data-name="footer-contact">
                        <h3 className="text-[2.5rem] mb-3 text-[#FFD700]">Contact</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Email: <a href="mailto:contact@kazinama.com" className="hover:text-[#FFD700]">Contact@kazinama.com</a></li>
                            <li>Phone: <a href="tel:+15551234567" className="hover:text-[#FFD700]">(+91) 8595544847</a></li>
                        </ul>
                    </div>

                    {/* Kazinama Text Logo */}
                    <div className="flex items-center justify-center">
                        <h1 className="text-[3.5rem] text-[#FFD700]">KAZINAMA</h1>
                    </div>

                    {/* Social + Patreon */}
                    <div data-name="footer-social" className="text-center md:text-right">
                        <h3 className="text-[2.5rem] mb-3 text-[#FFD700]">Follow Me</h3>
                        <div className="flex justify-center md:justify-end space-x-4 text-xl">
                            <a href="https://www.instagram.com/therealkazinama/" className="hover:text-[#FFD700]" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://open.spotify.com/artist/0FpO7hbnI5X094KWa9uvR8" className="hover:text-[#FFD700]" aria-label="Spotify">
                                <i className="fab fa-spotify"></i>
                            </a>
                            <a href="https://www.youtube.com/@iamkazinama" className="hover:text-[#FFD700]" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.patreon.com/kazinama" className="hover:text-[#FFD700]" aria-label="Patreon">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="362" cy="204" r="204"/>
                                    <rect x="0" y="0" width="100" height="546"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>&copy; 2025 <span className="text-white">KAZINAMA</span>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
