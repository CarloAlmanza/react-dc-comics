function Header({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid d-flex align-items-center mx-5">
                <img src="/img/dc-logo.png" />

                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        {links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;