import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
    const movie = useLoaderData()
    const { name, type, language, genres, status, premiered, ended, schedule, rating, network, summary, image } = movie
    return (
        <div  data-aos="zoom-in-down" data-aos-duration="1000" className="mt-5 mb-10 ">
            <div>
                <img className="w-1/3 mx-auto" src={image.original} alt="" />
                <h1 className="text-center text-4xl mt-3 font-bold text-[#eb2f06]">{name}</h1>
                <div className="text-xl font-bold flex justify-evenly mt-4">
                    <p>Language: {language}</p>
                    <p>Rating: {rating?.average}</p>
                    <p>Premiered: {premiered ? premiered : 'N/A'}</p>
                    <p>Ended: {ended ? ended : 'N/A'}</p>
                </div>
                <div className="text-xl font-bold flex justify-evenly mt-4">
                    <p>Time: {schedule.time}</p>
                    <p>Days: {schedule.days.map((day, i) => <span className="mr-4" key={i}>{day},</span>)}</p>
                    <p>Status: {status}</p>
                    <p>Network: {network?.name}</p>
                </div>
                <div className="text-xl font-bold flex justify-evenly mt-4">
                    <p>Type: {type}</p>
                    <p>Genres: {genres.map((genre, i) => <span className="mr-4" key={i}>{genre},</span>)}</p>
                </div>
                <div className="text-center">
                    <p className="text-xl my-5">{summary}</p>
                    <button className="btn btn-primary bg-[#eb2f06] hover:bg-[#e55039] border-0 text-white">Book Movie</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;