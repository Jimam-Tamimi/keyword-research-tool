import React, { useEffect } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import Navbar from '../components/Navbar/Navbar'
import { Container, Wraper } from '../globalStyles'
import { useState } from 'react'
import GlobalStyle from "../globalStyles";

import PrivateComponent from './PrivateComponent'
import GuestComponent from './GuestComponent'
import AlertComponent from '../components/Alert/AlertComponent'

import styled from 'styled-components'


export default function Layout({children}) {
    let width = window.innerWidth
    const [show, setShow] = useState(width <= 748? false: true)
    const [smallDevice, setSmallDevice] = useState(width <= 748? true: false)
    let darkMd = localStorage.getItem('darkMode') 
    const [darkMode, setDarkMode] = useState(darkMd == null?true:JSON.parse(darkMd))
    
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    const toggleDash = () => {
        setShow(!show)
    }

    const toggleDashOnSmallDevice = () => {
        if(smallDevice){
            setShow(!show)
        }
    }

    
    window.addEventListener('resize', () => {
        let width = window.innerWidth
        if(width <= 748){
            setSmallDevice(true)
            setShow(false)
        } else{
            setSmallDevice(false)
            setShow(true)
        }
    })
    


    return (
        <>
            <GlobalStyle darkMode={darkMode} />
            < AlertComponent />

            <Wraper>
                
                <Dashboard  toggleDashOnSmallDevice={toggleDashOnSmallDevice} show={show} />

                <Container onClick={() => smallDevice && show?setShow(false):null}  smallDevice={smallDevice} show={show}>
                    <Navbar show={show}  setDarkMode={setDarkMode} darkMode={darkMode} toggleDash={toggleDash} />
                    <Content >
                        {children}
                    </Content>
                </Container>
            </Wraper>
        </>
    )
}


const Content = styled.div`
    width: 96%;
    margin: 30px 0px;
`