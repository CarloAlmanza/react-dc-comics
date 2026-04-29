import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
    const navLinks = [
        "Characters", "Comics", "Movies", "TV", "Games",
        "Collectibles", "Videos", "Fans", "News", "Shop"
    ];

    const heroItems = [
        { img: "/img/buy-comics-digital-comics.png", text: "DIGITAL COMICS" },
        { img: "/img/buy-comics-merchandise.png", text: "DC MERCHANDISE" },
        { img: "/img/buy-comics-subscriptions.png", text: "SUBSCRIPTION" },
        { img: "/img/buy-comics-shop-locator.png", text: "COMIC SHOP LOCATOR" },
        { img: "/img/buy-dc-power-visa.svg", text: "DC POWER VISA" }
    ];

    return (
        <>
            <Header links={navLinks} />
            <Jumbotron />
            <Main />
            <HeroSection items={heroItems} />
            <Footer />
        </>
    );
}

export default App;