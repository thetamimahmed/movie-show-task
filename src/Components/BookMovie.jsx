import { useLoaderData } from "react-router-dom";

const BookMovie = () => {
    const movie = useLoaderData()
    const bookStore = localStorage.getItem('book-info')
    const bookStoreInfo =  JSON.parse(bookStore)
    console.log(bookStoreInfo.user)
    const handleForm = event =>{
        event.preventDefault()
        const form = event.target;
        const movie = form.movie.value;
        const user = form.user.value;
        const language = form.language.value;
        const quantity = form.quantity.value;
        const bookInfo = {movie, user, language, quantity};
        localStorage.setItem('book-info', JSON.stringify(bookInfo))
        console.log(bookInfo)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Book <span className="text-[#eb2f06]">{movie.name}</span> Movie</h1>
                </div>
                <form onSubmit={handleForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Name</span>
                            </label>
                            <input type="text" defaultValue={movie.name} placeholder="movie name" name="movie" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="user name" name="user" className="input input-bordered" defaultValue={bookStoreInfo && bookStoreInfo.user } />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Language</span>
                            </label>
                            <input type="text" defaultValue={movie.language} placeholder="language" name="language" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="quantity" name="quantity" className="input input-bordered" defaultValue={bookStoreInfo && bookStoreInfo.quantity }/>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary bg-[#eb2f06] hover:bg-[#e55039] border-0 text-white" value="Book Now" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookMovie;