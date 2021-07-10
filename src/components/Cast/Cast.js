import React, { Component } from "react";
import axios from "axios";

class Cast extends Component {
    state = {
        cast: [],
    }

    async componentDidMount() {
        const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74';
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        // console.log(response.data.results);
        this.setState({cast: response.data.cast})
    }
    render() {
        const { cast } = this.state;
        return (
            <>
                <ul>
                    {cast.map(({ id, profile_path, name, character }) => (
                        <li key={id}>
                            <div>
                                {profile_path ? (
                                    <img
                                        
                                        src={"https://image.tmdb.org/t/p/w300" + profile_path}
                                        alt={name}
                                    />
                                ) : (
                                    <p>No photo</p>
                                )}
                            </div>

                            <h2>{name}</h2>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
                {/* <Route path="/movies/:movieId" render={() => <h1>hi</h1>}/> */}
            </>
        )
    }
}

export default Cast;