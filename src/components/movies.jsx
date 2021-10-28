import React, { Component } from "react";
import {getMovies} from "../services/fakeMovieService"


class Movies extends Component {
    state = {
        movies: getMovies(),
    }

    handleDelete(movie) {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() {
        return (
            <div className="container" style={{padding: 30}}>
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
                        {this.state.movies.map(movie => 
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button
                                    className="btn btn-danger" 
                                    onClick={() => this.handleDelete(movie)}>
                                        Delete
                                    </button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movies;