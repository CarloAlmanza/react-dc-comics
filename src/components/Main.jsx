import comics from "../comics";

function Main() {
    const listaComicsWithMap = comics.map(current => {
        const { id, thumb, title } = current;

        return (
            <div className="col-2 mb-4" key={id}>
                <div className="card bg-dark">
                    <img src={thumb} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title text-light">{title}</h5>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="bg-dark">
            <div className="container-sm pt-5 pb-5">
                <div className="row">
                    {listaComicsWithMap}
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-primary">LOAD MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Main;