function ComicCard({ thumb, title }) {
    return (
        <div className="col-2 mb-4">
            <div className="card bg-dark">
                <img src={thumb} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h6 className="text-light">{title}</h6>
                </div>
            </div>
        </div>
    );
}

export default ComicCard;