import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../auth";

export const Navbar = () => {
    const navigate = useNavigate();
    const {logout, user}: any = useContext(AuthContext);
    const onLogout = () => {
        navigate('/login', {replace: true});
        logout()
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({isActive}) => `${isActive ? 'active': ''} nav-item nav-link`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={({isActive}) => `${isActive ? 'active': ''} nav-item nav-link`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({isActive}) => `${isActive ? 'active': ''} nav-item nav-link`}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className='nav-item nav-link text-light'>
                    {user?.name ?? 'Anónimo'}
                  </span>
                    <button
                        onClick={onLogout}
                        className='nav-item nav-link btn'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
};
