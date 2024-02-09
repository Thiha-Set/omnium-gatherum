import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from 'react-icons';
import { IoIosExit } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header({ titleText, logo }) {
    return (
        <div className='bg-warning p-2 d-flex justify-content-between'>
            <div>
                <IconContext.Provider value={{ style: { fontSize: '1.5rem' } }}>
                    <BsThreeDotsVertical/>
                </IconContext.Provider>
                {/* Make this a link */}
                <>
                    <img src={logo} className='mw-100 rounded-circle' />
                </>
            </div>
            <div className='d-flex'>
                <div className='align-self-center me-3 me-sm-0'>
                    <IconContext.Provider value={{ style: { fontSize: '2rem' } }}>
                        <GiHamburgerMenu />
                    </IconContext.Provider>
                </div>
                <div id="header-hamburger-icon" className='align-self-center'>
                    <IconContext.Provider value={{ style: { fontSize: '2rem' } }}>
                        <IoIosExit />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Header