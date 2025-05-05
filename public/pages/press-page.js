function PressPage() {
    return (
        <div data-name="press-page" className="bg-[#121212]">
            <Navbar />
            <Press />
            <Footer />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<PressPage />);
