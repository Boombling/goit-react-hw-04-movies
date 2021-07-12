import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink to={routes.home}>Home</NavLink>
            </li>
            <li>
                <NavLink to={routes.movies}>Search movies</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;