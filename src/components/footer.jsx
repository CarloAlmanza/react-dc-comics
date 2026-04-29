import FooterColumn from "./FooterColumn";

function Footer() {
    return (
        <>
            <div className="sfondo d-flex p-4">
                <div>
                    <FooterColumn
                        title="DC COMICS"
                        links={["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]}
                    />
                    <FooterColumn
                        title="SHOP"
                        links={["Shop DC", "SHOP DC Collectibles"]}
                    />
                </div>
                <FooterColumn
                    title="DC"
                    links={["Terms Of Use", "Privacy policy", "Ad Choises", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]}
                />
                <FooterColumn
                    title="SITES"
                    links={["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]}
                />
                <div className="col-8 d-flex align-items-center justify-content-center">
                    <img src="/img/dc-logo-bg.png" className="logo" />
                </div>
            </div>
            <div className="bg-dark d-flex justify-content-around">
                <div className="p-4">
                    <button type="button" className="btn btn-outline-primary">SIGN UP NOW</button>
                </div>
                <div className="d-flex align-items-center p-2">
                    <h4 className="text-primary">FOLLOW US</h4>
                    <img className="icons" src="/img/footer-facebook.png" />
                    <img className="icons" src="/img/footer-twitter.png" />
                    <img className="icons" src="/img/footer-youtube.png" />
                    <img className="icons" src="/img/footer-pinterest.png" />
                    <img className="icons" src="/img/footer-periscope.png" />
                </div>
            </div>
        </>
    );
}

export default Footer;