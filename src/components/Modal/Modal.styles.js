import styled from "styled-components"
import {Flex} from "../../globalStyles"

export const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: #00000073;    
    ${({show}) => show? `z-index: 102; opacity: 1;`: `z-index: -10; opacity: 0;`}
    ${Flex}
    align-items: baseline;
    overflow-Y: scroll;
`
export const ModalContainer = styled.div`
    width: 35%;
    ${({sm}) => sm?`width: 35%;`:''}
    ${({md}) => md?`width: 65%;`:''}
    ${({lg}) => lg?`width: 85%;`:''}

    
    transform: ${({show, slideBottom, slideTop, slideLeft, slideRight, fade, scale}) => ( 
        !show?`
        ${slideBottom? `translateY(-100vh)`: slideTop? `translateY(100vh)`: slideLeft? `translateX(100vh)`: slideRight? `translateX(-100vh)`: scale? `scale(0)`: `none`}`:`none` 
    )};
    ${Flex}
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 2px var(--main-box-shadow-color);
    margin: 35px 0px;
`
export const ModalHead = styled.div`
    width: 100%;
    height: 60px;
    background: var(--primary-color);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
export const ModalHeadTitle = styled.h4`
    font-size: 22px;
    font-weight: 600;
    color: var(--primary-text-color);
`
export const CloseIconWrap = styled.div`
    color: var(--primary-text-color);
    ${Flex}
    padding: 4px;
    border-radius: 100%;
    font-size: 30px;
    cursor: pointer;
    font-size: 25px;

    &:hover{
        background: var(--primary-hover-color);
    }
    &:active{
        transform: var(--for-active-click);
    }

`


export const ModalBody = styled.div`
    width: 100%;
    min-height: 200px;
    background: var(--secendory-color);
    ${Flex}
    padding: 20px;
`
export const ModalFooter = styled.div`
width: 100%;
    height: 65px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: var(--secendory-color);
    box-shadow: 0px 1px 20px 0px #00000061;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;

`