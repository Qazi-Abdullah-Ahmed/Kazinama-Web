function MerchPage() {
    return (
        <div data-name="merch-page" className="bg-[#121212]">
            <Navbar />
            <Merch />
            <Footer />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MerchPage />);
