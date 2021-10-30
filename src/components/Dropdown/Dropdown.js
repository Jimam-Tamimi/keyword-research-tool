import React, { useRef, useEffect , useState} from "react";
import {
  Wrap,
  DropdownMenu, 
  DropdownLink, 
  LinkIcon, 
  LinkText,
} from "./Dropdown.styles";
import { Button, Badge, IconDiv } from '../../globalStyles'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {VscSaveAll} from 'react-icons/vsc'
import {IoMdOpen} from 'react-icons/io'
import {FaRegCopy} from 'react-icons/fa'
import {FaBan} from 'react-icons/fa'

export default function Dropdown({  absolute, options, style }) {
 

  const [showDropdown, setShowDropdown] = useState(false)


  return (
    <>
      <Wrap style={style}>
        <IconDiv
          onClick={(e) => setShowDropdown(!showDropdown)}
          style={{
            margin: "unset",
              
          }}
          scaleOnHover
          width="30px"
          fontSize="20px"
          height="30px"
        >
          <BsThreeDotsVertical />
        </IconDiv>
        <DropdownMenu
          onClick={(e) => (showDropdown ? setShowDropdown(false) : "")}
          showDropdown={showDropdown}
        >

          {
            options.map(option => (
              <DropdownLink onClick={option.onClick} >
                <LinkIcon>
                  <FaBan />
                </LinkIcon>
                <LinkText>{option.name}</LinkText>
              </DropdownLink>
            ))
          }
          
  
        </DropdownMenu>
      </Wrap>

    </>
  );
}
