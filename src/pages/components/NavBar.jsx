import React, { useState } from 'react'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import Underscore from './Underscore';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    const [windowWidth, setWindowSize] = useState(window.innerWidth);

    const options = [
        {
            label: 'Inicio',
            href: '/home',
            icon: <HomeRoundedIcon />,
            active: false,
        },
        {
            label: 'Habilidades',
            href: '/skills',
            icon: <AutoStoriesRoundedIcon />,
            active: false,
        },
        // {
        //     label: 'Trabajo',
        //     href: '/work',
        //     icon: <EngineeringRoundedIcon />,
        //     active: false,
        // },
        {
            label: 'Contacto',
            href: '/contact',
            icon: <ContactMailRoundedIcon />,
            active: false,
        },
    ]

    const optionsComponents = (
        windowWidth >= 600 ?
            <>
                {options.map(opt => (
                    <li key={opt.label} className='navBtn'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'activeNav' : ''}
                            to={opt.href}
                        >
                            {opt.label}
                        </NavLink>
                        <Underscore />
                    </li>
                ))}
            </>

            :
            <>
                {options.map(opt => (
                    <li key={opt.label} className='navBtn'>
                        <NavLink
                            className={(isActive) => isActive ? 'activeNav' : ''}
                            to={opt.href}
                        >
                            {opt.icon}
                        </NavLink>
                        <Underscore />
                    </li>
                ))}
            </>
    )

    return (
        <nav>
            <Link to={'/home'}> <h4 className='logo' style={{ color: '#fff' }}>PORTAFOLIO</h4> </Link>
            <div>
                <ul className='navOptions'>
                    {optionsComponents}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar