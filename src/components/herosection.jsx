function HeroItem({ img, text }) {
    return (
        <div className="hero-item">
            <img src={img} alt={text} />
            <span>{text}</span>
        </div>
    );
}

function HeroSection({ items }) {
    return (
        <div className="hero-section d-flex justify-content-center">
            {items.map((item, i) => (
                <HeroItem key={i} {...item} />
            ))}
        </div>
    );
}

export default HeroSection;