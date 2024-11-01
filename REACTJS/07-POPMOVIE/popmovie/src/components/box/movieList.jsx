import MovieItem from "./movieItem";

export default function MovieList({movies, onSelectedMovieId}) {
    return (
        <ul className="list list-movies">
            {movies?.map((movie, index) => (
                <MovieItem 
                    key={index}
                    movie={movie}
                    onSelectMovieId={onSelectedMovieId}
                />
            ))}
        </ul>
    );
}