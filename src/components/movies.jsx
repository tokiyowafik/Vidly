import React, { Component } from "react";
import {getMovies} from "../services/fakeMovieService"
import Like from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate'


class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }

    handleDelete(movie) {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie };
        movies[index].liked = !movie.liked;
        this.setState({ movies });
    }

    handlePageChange = pageNumber => {
        let { currentPage } = this.state;
        currentPage = pageNumber;
        this.setState({ currentPage });
    }

    handleNextPage = pageNumber => {
        let { currentPage } = this.state;
        currentPage = pageNumber + 1;
        this.setState({ currentPage });
    }

    handlePreviousPage = pageNumber => {
        let { currentPage } = this.state;
        currentPage = pageNumber - 1;
        this.setState({ currentPage });
    }

    render() {
            const { length: count } = this.state.movies;
            const { movies: allMovies, pageSize, currentPage } = this.state;
            const movies = paginate(allMovies, pageSize, currentPage);
            if (count === 0)
                return <p>There are no movies in this database.</p>;
            return(
                <React.Fragment>
                    <p>Showing {this.state.movies.length} Movies in The Database</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map(movie => 
                                <tr key={movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                                    </td>
                                    <td><button
                                        className="btn btn-danger" 
                                        onClick={() => this.handleDelete(movie)}>
                                            Delete
                                        </button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination 
                        currentPage={currentPage}
                        itemsCount={count}
                        pageSize={pageSize}
                        handlePageChange={this.handlePageChange}
                        handleNextPage={this.handleNextPage}
                        handlePreviousPage={this.handlePreviousPage}
                    />
                </React.Fragment>
            );
    }
}

export default Movies;