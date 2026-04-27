function Footer() {
    return (
        <>
            <div className="sfondo d-flex">
                <div className="col-4 d-flex justify-content-around p-4">
                    <div className="col-4">
                        <h4 className="text-light">DC COMICS</h4>
                        <ul className="pin text-light">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                        <h4 className="text-light">SHOP</h4>
                        <ul className="pin text-light">
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-light">DC</h4>
                        <ul className="pin text-light">
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choises</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4 className="text-light">SITES</h4>
                        <ul className="pin text-light">
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
                <div className="col-8 d-flex align-items-center justify-content-center">
                    <img src="/img/dc-logo-bg.png" className="logo" />
                </div>
            </div>
            <div className="bg-dark d-flex justify-content-around">
                <div className="p-4">
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                </div>
                <div className="d-flex align-items-center">
                    <h4 className="text-primary">FOLLOW US</h4>
                    <img className="icons" src="/img/footer-facebook.png" />
                    <img className="icons" src="/img/footer-twitter.png" />
                    <img className="icons" src="/img/footer-youtube.png" />
                    <img className="icons" src="/img/footer-pinterest.png" />
                    <img className="icons" src="/img/footer-periscope.png" />
                </div>
            </div>

        </>
    )
}

export default Footer;