import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";

const Home = () => {
    const movies = useLoaderData()

    return (
        <div>
            {
                movies.map(movie => <Movie key={movie.show.id} show = {movie.show}></Movie>)
            }
        </div>
    );
};

export default Home;