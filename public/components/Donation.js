function Donation() {
    const [amount, setAmount] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handlePayPalDonation = () => {
        window.open('https://paypal.me/kazinama', '_blank');
    };
    
const handleRazorpayDonation = () => {
    window.open("https://razorpay.me/@kazinama", "_blank");
};


    const handleAmountChange = (e) => {
        const value = e.target.value;
        if (value === '' || (/^\d+$/.test(value) && parseInt(value) > 0)) {
            setAmount(value);
        }
    };

    return (
        <section id="donation" data-name="donation-section" className="min-h-screen bg-[#121212] flex items-center py-20">
            <div className="container max-w-4xl mx-auto px-4">
                <h2 className="text-[4rem] mb-8 text-center">
                    <span className="text-[#FFD700]">SUPPORT</span>
                </h2>
                
                <div className="bg-[#1A1A1A] rounded-lg p-8 shadow-xl">
                    {/* Amount Input */}
                    <div className="mb-8">
                        <label className="block text-[#FFD700] mb-2 text-lg">Choose Amount</label>
                        <div className="grid grid-cols-4 gap-4 mb-4">
                            {['100', '150', '200', '250'].map((value) => (
                                <button
                                    key={value}
                                    onClick={() => setAmount(value)}
                                    className={`py-3 rounded-lg transition-all duration-300 ${
                                        amount === value
                                            ? 'bg-[#FFD700] text-black font-semibold'
                                            : 'bg-[#252525] text-white hover:bg-[#333]'
                                    }`}
                                >
                                    ₹{value}
                                </button>
                            ))}
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                            <input
                                type="text"
                                value={amount}
                                onChange={handleAmountChange}
                                className="w-full px-8 py-3 bg-[#252525] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                placeholder="Enter amount"
                            />
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="mb-8">
                        <label className="block text-[#FFD700] mb-2 text-lg">Message (Optional)</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-3 bg-[#252525] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                            rows="4"
                            placeholder="Leave a message..."
                        />
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                            {error}
                        </div>
                    )}

                    {/* Payment Buttons */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <button
                            onClick={handlePayPalDonation}
                            disabled={loading || !amount}
                            className="flex items-center justify-center gap-2 bg-[#0070BA] text-white py-4 px-6 rounded-lg hover:bg-[#005ea6] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                <>
                                    <i className="fab fa-paypal text-xl"></i>
                                    <span>PayPal</span>
                                </>
                            )}
                        </button>
                        <button
                            onClick={handleRazorpayDonation}
                            disabled={loading || !amount}
                            className="flex items-center justify-center gap-2 bg-[#0B72E7] text-white py-4 px-6 rounded-lg hover:bg-[#0960c7] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                <>
                                    <img 
                                        src="/photos/razorpay.png" 
                                        alt="Razorpay" 
                                        className="w-5 h-5"
                                    />
                                    <span>Razorpay</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Security Note */}
                    <div className="mt-8 text-center text-gray-400">
                        <p className="flex items-center justify-center gap-2">
                            <i className="fas fa-lock"></i>
                            All transactions are secure and encrypted
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
