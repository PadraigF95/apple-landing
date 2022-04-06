import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillBagFill, BsApple } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5'

import './Navbar.css'



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false)
  return (
    <nav className='app__navbar'>
        
        <ul className='app__navbar-links'>
            <li><BsApple color='#F5F5F7'/></li>
            <li className='p__robonto'>Store</li>
            <li className='p__robonto'>Mac</li>
            <li className='p__robonto'>iPad</li>
            <li className='p__robonto'>iPhone</li>
            <li className='p__robonto'>Watch</li>
            <li className='p__robonto'>AirPods</li>
            <li className='p__robonto'>TV & Home</li>
            <li className='p__robonto'>Only on Apple</li>
            <li className='p__robonto'> Accessories</li>
            <li className='p__robonto'>Support</li>
            <li><AiOutlineSearch color='#F5F5F7' className='overlay__search' onClick={() =>setToggleSearch(true)} /></li>
            {toggleSearch && (
                    <div className='app__navbar-searchbar'>
                        <form className='app__navbar-search-form'>
                            <input type="text" 
                            placeholder='search apple.com'
                            className='app__navbar-search-form__input'
                            />
                            <IoCloseOutline color='#F5F5F7' className='search__close' onClick={() =>setToggleSearch(false)}/>
                        </form>

                    </div>
            )}
            <li><BsFillBagFill color='#F5F5F7' /></li>
        </ul>
            <div className='app__navbar-smallscreen'>
                <div className='app__navbar-smallscreen-logo'>
                <GiHamburgerMenu color='#F5F5F7'  onClick={() =>setToggleMenu(true)} />
                  
                </div>
           
            {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                <IoCloseOutline color='#F5F5F7' className='overlay__close' onClick={() =>setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
                <li className='p__robonto-smallscreen'>Store</li>
                <li className='p__robonto-smallscreen'>Mac</li>
                <li className='p__robonto-smallscreen'>iPad</li>
                <li className='p__robonto-smallscreen'>iPhone</li>
                <li className='p__robonto-smallscreen'>Watch</li>
                <li className='p__robonto-smallscreen'>AirPods</li>
                <li className='p__robonto-smallscreen'>TV & Home</li>
                <li className='p__robonto-smallscreen'>Only on Apple</li>
                <li className='p__robonto-smallscreen'> Accessories</li>
                <li className='p__robonto-smallscreen'>Support</li>
            </ul>
        </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar