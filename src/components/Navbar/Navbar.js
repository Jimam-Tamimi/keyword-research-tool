import React, { useEffect, useRef, useState } from 'react'
import prof from '../../assets/img/prof.jpg'

import {IoMdLogOut} from 'react-icons/io'
import {IoNotificationsOutline} from 'react-icons/io5'
import {BiMessageRoundedDots} from 'react-icons/bi'


import Switch from "react-switch";


import {
    NavbarWraper,
    NavSearchForm,
    SearchInp,
    Submit,
    NavEndSection,
    NavLogout,
 
    HambBurgerWrap,
    HambBurgerLine,
    ModeWrap,
} from './Navbar.styles' 



export default function Navbar({toggleDash, setDarkMode, darkMode, show}) {
 
    
    return (
        <>
            <NavbarWraper show={show}>
                <HambBurgerWrap onClick={toggleDash}>
                    <HambBurgerLine />
                    <HambBurgerLine />
                    <HambBurgerLine />
                </HambBurgerWrap>

                <NavEndSection>
                    <ModeWrap>
                        <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} 
                        onColor="#2f343a"
                        ofColor="rgb(255, 255, 255)"
                        onHandleColor="#ffffff"
                        handleDiameter={25}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={25}
                        width={45}
                        />
                    </ModeWrap>
                    
                    
                    <NavLogout>
                        <IoMdLogOut/>
                    </NavLogout>

                </NavEndSection>
            </NavbarWraper>
        </>
    )
}
