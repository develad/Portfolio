import React,{useContext} from 'react'
import styled from 'styled-components'
import * as md from 'react-icons/md'
import {DarkModeStore} from '../store/Dark.Mode.Store'

function Footer() {
    const {isDark}= useContext(DarkModeStore);

    return (
        <FooterContainer isDark={isDark}>
            <div>All copyrights reserved to: ELAD BAR &copy; {new Date().getFullYear()}</div>
            <Mail href="mailto:develadb@gmail.com" isDark={isDark}><md.MdEmail/>develadb@gmail.com</Mail>

        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
font-family:Bungee,sans-serif;
margin-top:5rem;
text-align:center;
color:white;
display:flex;
flex-direction:column-reverse;
align-items:center;
justify-content:space-between;
font-size:2rem;
line-height:1;
transition:0.4s ease;
@media only screen and (max-width: 980px) {
    margin-top:2rem;
    font-size:1rem;
    color: ${({isDark})=>isDark?"white":"rgb(80,80,80)"};
    padding:1rem;
}
`;
const Mail = styled.a`
text-decoration: none;
color:white;
display:flex;
align-items:center;
transition:0.4s ease;
&:hover{
    color:yellow;
}

@media only screen and (max-width: 980px) {
    font-size:1rem;
    color: ${({isDark})=>isDark?"white":"rgb(80,80,80)"};
    padding:1rem;
}
`;