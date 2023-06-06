import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";

const Home = () => {
    const movies = useLoaderData()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 ">
            {
                movies.map(movie => <Movie key={movie.show.id} show = {movie.show}></Movie>)
            }
        </div>
    );
};

export default Home;