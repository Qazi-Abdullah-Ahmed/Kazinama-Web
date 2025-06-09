function Merch() {
    return (
        <section id="merch" data-name="merch-section" className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
            <div className="text-center px-4">
                <div className="relative inline-block mb-8">
                    <i className="fas fa-tshirt text-[#FFD700] text-7xl animate-bounce"></i>
                    <div className="absolute -top-2 -right-2 bg-[#FFD700] text-black text-xs px-2 py-1 rounded-full">
                        Soon
                    </div>
                </div>
                <h2 className="text-[3rem] mb-4">
                    Merch Store <span className="text-[#FFD700]">Coming Soon</span>
                </h2>
                <p className="text-gray-400 text-xl max-w-md mx-auto">
                    Get ready for exclusive merchandise!
                </p>
            </div>
        </section>
    );
}
