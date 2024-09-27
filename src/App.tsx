import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log(`toggleMenu clicked`);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Header */}
            <nav className="nav-main-main">
                <div className="menu-desktop">
                    <div className="menu-logo-container-desktop">
                        <img
                            className="logo-image-desktop"
                            src="logo-desktop.svg"
                            alt="logo-frontend-mentor"
                        />
                    </div>
                    <div className="menu-logo-container-mobile">
                        <img src="logo-mobile.svg" alt="logo-frontend-mentor" />
                    </div>
                    <div className="menu-options full">
                        <a href="#" className="menu-options-item">
                            LEARNING PATHS
                        </a>
                        <a href="#" className="menu-options-item">
                            CHALLENGES
                        </a>
                        <a href="#" className="menu-options-item">
                            ARTICLES
                        </a>
                        <a href="#" className="menu-options-item">
                            UNLOCK PRO
                        </a>
                        <a href="#" className="menu-options-item">
                            LOG IN WITH GITHUB
                        </a>
                    </div>

                    <div
                        className="burger-icon"
                        id="burger-icon"
                        onClick={toggleMenu}
                    >
                        <div
                            className={`burger-icon-line ${
                                isMenuOpen ? "open" : ""
                            }`}
                        ></div>
                        <div
                            className={`burger-icon-line ${
                                isMenuOpen ? "open" : ""
                            }`}
                        ></div>
                        <div
                            className={`burger-icon-line ${
                                isMenuOpen ? "open" : ""
                            }`}
                        ></div>
                    </div>
                </div>
                <div
                    className={`menu-options-mobile ${
                        isMenuOpen ? "open" : ""
                    }`}
                >
                    <a href="#" className="menu-options-item">
                        LEARNING PATHS
                    </a>
                    <a href="#" className="menu-options-item">
                        CHALLENGES
                    </a>
                    <a href="#" className="menu-options-item">
                        ARTICLES
                    </a>
                    <a href="#" className="menu-options-item">
                        UNLOCK PRO
                    </a>
                    <a href="#" className="menu-options-item">
                        LOG IN WITH GITHUB
                    </a>
                </div>
            </nav>
            {/* Main content */}
            <MainContent />
            {/* Footer section */}
            <Footer />
        </>
    );
}

export default App;
