const Footer = () => {
    return (
        <footer>
            <div className="container-footer-info">
                <div className="container-footer-info-1">
                    <div className="container-footer-info-1-msg-subscribe">
                        <span className="container-footer-info-1-msg-subscribe_title">
                            Stay up to date
                        </span>
                        <span className="container-footer-info-1-msg-subscribe_text">
                            with new challenges, featured solutions, selected
                            articles and our latest news
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
    );
};

export default Footer;
