import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">TecData Soft</Link>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user?.email && <span>Welcome {user.email}</span>
                }
            </div>
        </div>
    );
};

export default Header;