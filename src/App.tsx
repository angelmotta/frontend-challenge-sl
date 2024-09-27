import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(`toggleMenu clicked`);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            {/* Main content */}
            <MainContent />
            {/* Footer section */}
            <Footer />
        </>
    );
}

export default App;
