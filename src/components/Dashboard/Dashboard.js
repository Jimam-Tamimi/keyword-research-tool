import React from "react";

import {AiFillDashboard, AiOutlineForm,} from 'react-icons/ai'
import {FaHandsHelping,} from 'react-icons/fa'
import {BiTimer, BiDonateBlood, BiMessageRoundedDetail,} from 'react-icons/bi'
import {GiPlayerPrevious,} from 'react-icons/gi'
import {IoMdNotificationsOutline,} from 'react-icons/io'
import {MdFavoriteBorder,} from 'react-icons/md'
import {CgProfile,} from 'react-icons/cg'
import {FiSettings,} from 'react-icons/fi'

import logo from '../../assets/img/logo.png'


import { 
    DashboardWraper, 
    Logo, 
    LogoText, 
    DashLink, 
    LinkIcon,
    LinkText,
    DashboardLogo,
} from "./Dashboard.styles";


export default function Dashboard({show, toggleDashOnSmallDevice}) {
    const dashLinks = [
        {to:"/", name: 'Dashboard', icon: AiFillDashboard},
        {to:"/search-console/", name: 'Search Console', icon: AiFillDashboard},
        {to:"/keyword-research/", name: 'Keyword Research', icon: AiFillDashboard},
 
    ]


    
  return (
    <>
      <DashboardWraper show={show}>
            <DashboardLogo exact to="/">
                <Logo  src={logo}/>
                <LogoText>
                    BloodSupport
                </LogoText>
            </DashboardLogo>
            
            {
                dashLinks.map((link, i) => {
                    return (
                        <>
                        <DashLink  key={i} on Click={() => toggleDashOnSmallDevice()} activeClassName="active"  to={link.to} exact>
                            <LinkIcon>
                                <link.icon/>
                            </LinkIcon>
                            <LinkText>
                                {link.name}
                            </LinkText>
                        </DashLink>
                        </>
                    )
                })
            }

      </DashboardWraper>
    </>
  );
}
