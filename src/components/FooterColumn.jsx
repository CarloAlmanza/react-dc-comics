function FooterColumn({ title, links }) {
    return (
        <div className="p-2">
            <h4 className="text-light">{title}</h4>
            <ul className="pin text-light">
                {links.map((link, i) => <li key={i}>{link}</li>)}
            </ul>
        </div>
    );
}

export default FooterColumn;