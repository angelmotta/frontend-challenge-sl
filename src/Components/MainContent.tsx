const MainContent = () => {
    return (
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
                            This responsive page is perfect if you've learned
                            the fundamentals of HTML & CSS, completed a couple
                            of smaller projects, and want to take it up a notch.
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
                        taking the challenges, sharing resources, helping each
                        other, and chatting about all things front-end!
                    </p>
                    <a href="#" className="container-community__content_4">
                        Join our Discord
                    </a>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
