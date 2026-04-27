function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid d-flex align-items-center mx-5">
                <img src="/img/dc-logo.png" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Characters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Comics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Tv</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Collectibles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Fans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Shop</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;