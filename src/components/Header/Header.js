import React from 'react';
import logo from '../../dumbbell.png';
import './Header.css'

const Header = () => {
    return (
<div>
<div className="navbar bg-primary">
    <img img className='ml-10' src= {logo} alt = ''></img>
    <a className="normal-case text-3xl ml-8"> Physical Fitness Club</a>
</div>

</div>
    );
};

export default Header;