import ComicCard from "./ComicCard";
import comics from "../comics";

function Main() {
    return (
        <div className="bg-dark position-relative">
            <div className="container position-relative">

                <span className="series-label">CURRENT SERIES</span>

                <div className="row pt-5">
                    {comics.map(comic => (
                        <ComicCard key={comic.id} {...comic} />
                    ))}
                </div>

                <div className="text-center pb-5">
                    <button type="button" className="btn btn-primary">LOAD MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Main;