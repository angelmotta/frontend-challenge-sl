import { useState } from "react";
import "./App.css";

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
            <main>
                <div className="flex-parent-div">
                    <div className="content-card">
                        <div className="left-container">
                            <div className="left-container__icons">
                                <div className="left-container__left-tags">
                                    <span className="left-container__left-tags-1">
                                        PREMIUM
                                    </span>
                                    <span className="left-container__left-tags-2">
                                        HTML
                                    </span>
                                    <span className="left-container__left-tags-3">
                                        CSS
                                    </span>
                                </div>
                                <span className="left-container__right">
                                    <span className="left-container__right-1">
                                        1
                                    </span>
                                    <span className="left-container__right-2">
                                        NEWBIE
                                    </span>
                                </span>
                            </div>
                            <h1 className="left-container-title">
                                Skilled e-learning
                            </h1>
                            <p className="left-container-text">
                                This responsive page is perfect if you've
                                learned the fundamentals of HTML & CSS,
                                completed a couple of smaller projects, and want
                                to take it up a notch.
                            </p>
                            <button className="left-container__main-btn">
                                Start challenge
                            </button>
                        </div>
                        <div className="right-container">
                            <img
                                alt="Desktop design preview"
                                className="right-container__preview-img"
                                src="https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/fycej3bfur1qnf3ixtqq.jpg"
                            ></img>
                            <div className="right-container_btns">
                                <button className="right-container_btn__primary">
                                    Desktop Design
                                </button>
                                <button className="right-container_btn__secondary">
                                    Tablet Design
                                </button>
                                <button className="right-container_btn__secondary">
                                    Mobile Design
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-community">
                    <div className="container-community__content">
                        <span className="container-community__content_1">
                            <img src="logo-discord.svg" alt="" />
                        </span>
                        <h2 className="container-community__content_2">
                            Join our Discord community
                        </h2>
                        <p className="container-community__content_3">
                            Join thousands of Frontend Mentor community members
                            taking the challenges, sharing resources, helping
                            each other, and chatting about all things front-end!
                        </p>
                        <a href="#" className="container-community__content_4">
                            Join our Discord
                        </a>
                    </div>
                </div>
            </main>
            {/* Footer section */}
            <footer>
                <div className="container-footer-info">
                    <div className="container-footer-info-1">
                        <div className="container-footer-info-1-msg-subscribe">
                            <span className="container-footer-info-1-msg-subscribe_title">
                                Stay up to date
                            </span>
                            <span className="container-footer-info-1-msg-subscribe_text">
                                with new challenges, featured solutions,
                                selected articles and our latest news
                            </span>
                        </div>
                        <div className="container-footer-info-1__div-form">
                            <input
                                className="container-footer-info-1__input"
                                type="text"
                                placeholder="email@example.com"
                            />
                            <button className="container-footer-info-1__button">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="container-footer-info-2">
                        <div className="container-footer-info-2_item-1">
                            <h3 className="container-footer-info-2_item-title">
                                FRONTEND MENTOR
                            </h3>
                            <ul className="container-footer-info-2_item-list">
                                <li>Unlock Pro</li>
                                <li>Contact us</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="container-footer-info-2_item-2">
                            <h3 className="container-footer-info-2_item-title">
                                EXPLORE
                            </h3>
                            <ul className="container-footer-info-2_item-list">
                                <li>Learning Paths</li>
                                <li>Challenges</li>
                                <li>Solutions</li>
                                <li>Articles</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                        <div className="container-footer-info-2_item-3">
                            <h3 className="container-footer-info-2_item-title">
                                COMMUNITY
                            </h3>
                            <ul className="container-footer-info-2_item-list">
                                <li>Discord</li>
                                <li>Guidelines</li>
                            </ul>
                        </div>
                        <div className="container-footer-info-2_item-4">
                            <h3 className="container-footer-info-2_item-title">
                                FOR COMPANIES
                            </h3>
                            <ul className="container-footer-info-2_item-list">
                                <li>Hire developers</li>
                                <li>Train developers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-lowest-footer">
                    <p>© Frontend Mentor 2019 - 2024</p>
                    <ul className="container-lowest-footer-list">
                        <li>Terms</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>License</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default App;
