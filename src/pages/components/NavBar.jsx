import React, { useState } from 'react';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import Underscore from './Underscore';
import { Link, NavLink } from 'react-router-dom';
import { Language } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState('es');
    const [windowWidth, setWindowSize] = useState(window.innerWidth);

    const options = [
        {
            label: t('navBar.home'),
            href: '/home',
            icon: <HomeRoundedIcon />,
            active: false,
        },
        {
            label: t('navBar.studyWork'),
            href: '/skills',
            icon: <AutoStoriesRoundedIcon />,
            active: false,
        },
        {
            label: t('navBar.contact'),
            href: '/contact',
            icon: <ContactMailRoundedIcon />,
            active: false,
        },
    ];

    const toggleLang = () => {
        let ref = '';
        if (lang === 'es') {
            ref = 'en';
        } else {
            ref = 'es';
        }
        i18n.changeLanguage(ref);
        setLang(ref);
    };

    const optionsComponents =
        windowWidth >= 600 ? (
            <>
                {options.map((opt) => (
                    <li key={opt.label} className="navBtn">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeNav' : ''
                            }
                            to={opt.href}
                        >
                            {opt.label}
                        </NavLink>
                    </li>
                ))}
            </>
        ) : (
            <>
                {options.map((opt) => (
                    <li key={opt.label} className="navBtn">
                        <NavLink
                            className={(isActive) =>
                                isActive ? 'activeNav' : ''
                            }
                            to={opt.href}
                        >
                            {opt.icon}
                        </NavLink>
                    </li>
                ))}
            </>
        );

    return (
        <nav>
            <Link to={'/home'}>
                {' '}
                <h4 className="logo" style={{ color: '#fff' }}>
                    PORTAFOLIO
                </h4>{' '}
            </Link>
            <div>
                <ul className="navOptions">{optionsComponents}</ul>
            </div>
            <p onClick={toggleLang}>
                <Language style={{ color: '#fff', cursor: 'pointer' }} />
                {lang}
            </p>
        </nav>
    );
};

export default NavBar;
