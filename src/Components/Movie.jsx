import { Link } from "react-router-dom";

const Movie = ({ show }) => {
    const { id, name, language, status, premiered, ended, averageRuntime, genres, rating, image } = show
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1500" className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-full h-full" src={image.medium} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-[#eb2f06]">{name}</h2>
                <div className="flex justify-between">
                    <p>Language: {language}</p>
                    <p>Status: {status}</p>
                </div>
                <div className="flex justify-between">
                    <p>Rating: {rating.average ? rating.average : 'N/A'}</p>
                    <p>Average Runtime: {averageRuntime}</p>
                </div>
                <div className="space-y-2">
                    <p>Premiered: {premiered}</p>
                    <p>Ended: {ended ? ended : 'N/A'}</p>
                    <p>Genres: {genres.map((genre, i) => <span className="mr-4" key={i}>{genre},</span>)}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/movie/${id}`}><button className="btn btn-primary bg-[#eb2f06] hover:bg-[#e55039] border-0 text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;