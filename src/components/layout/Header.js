import React, { useState } from 'react';

// React-router-dom
import { Link } from 'react-router-dom';

// MUI Icon
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Styles
import styles from "./Header.module.css"

const Header = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const setActive = event => {
        const liElems = document.querySelectorAll("li")
        liElems.forEach(liElem => liElem.classList.remove(styles.active))
        
        event.target.classList.add(styles.active)

        closeMenu()
    }

    return (
        <div className='shadow-xl w-full'>
            <nav className='max-w-6xl flex justify-between mx-auto py-5 px-3 md:px-12'>

                <div className='flex items-center'>
                    <PaidOutlinedIcon className='text-amber-300' />
                    <div className='font-bold'>
                        <span className='text-amber-300'>C</span>rpto
                        <span className='text-amber-300'>W</span>atcher
                    </div>
                </div>

                <div>
                    <div className={`${styles.navbar} ${isOpen ? styles.open : styles.hide}`}>
                        <CloseIcon className={styles.closeIcon} onClick={closeMenu}/>
                        <ul>
                            <Link to="/aboutproject" onClick={setActive}>
                                <li>
                                    About Project
                                </li>
                            </Link>


                            <Link to="/watchlist" onClick={setActive}>
                                <li>
                                    Watchlist
                                </li>
                            </Link>

                            <Link to="/" onClick={setActive}>
                                <li className={styles.active}>
                                    Spot Markets
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <MenuIcon onClick={openMenu} className={styles.menuIcon} />
                </div>
            </nav>
        </div>
    );
};

export default Header;