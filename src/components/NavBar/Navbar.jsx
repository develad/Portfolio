import React,{useContext} from 'react'
import { motion } from "framer-motion";
import * as fa from 'react-icons/fa';
import * as ri from 'react-icons/ri';
import styled from 'styled-components'
import scroll from 'react-scroll'
import {DarkModeStore} from '../store/Dark.Mode.Store'
import {ScrollingStore} from '../store/Scrolling.Page.Store'

const navButtons = [
    {
        titleBtn:"Home",
        icon:<fa.FaHome/>
    },
    {
        titleBtn:"Projects",
        icon:<fa.FaCode/>
    },
    {
       titleBtn:"CONTACT ME",
       icon:<fa.FaEnvelope/>
   },
]

function Navbar() {

const{isDark,setIsDark} = useContext(DarkModeStore);
const{isScrolling,ButtonClickedHandler} = useContext(ScrollingStore);

    return (
        <>
        <Box
        initial={{opacity:0,x:"-100vw"}}
        animate={{opacity:1,x:0}}
        transition={{type:"tween",duration:0.4}}
        isDark={isDark}
        style={
        isScrolling?
        {transition:'0.5s ease'}:
        {background:'transparent',transition:'0.5s ease'}}>
            
            <BigText
                onClick={()=>{scroll.animateScroll.scrollToTop()}}>elad bar
            </BigText>
            
            <ButtonContainer>
            {navButtons.map((btn,index) =>{
                return(
                    <Button
                    btnlength={navButtons.length}
                    key={index}
                    onClick={()=>{ButtonClickedHandler(btn.titleBtn)}}>
                    {btn.icon}{btn.titleBtn}
                    </Button>
                )
            })}
            <ThemeButton
            onClick={()=> {
              setIsDark(!isDark)
              console.log(isDark)
            }}
            >{isDark?<fa.FaSun/>:<ri.RiMoonClearFill/>}
            </ThemeButton>

            </ButtonContainer>
        </Box>
        </>
    )
}

export default Navbar

const BigText=styled(motion.h3)`
@media only screen and (max-width: 980px) {
    display:none;
}
font-size:30px;
font-family:Bungee;
text-shadow: 2px 4px lightcoral;
cursor: pointer;
transition:all 0.5s ease;
&:hover{
    text-shadow: 2px 4px lime;
}
`;

const Box = styled(motion.div)`
@media only screen and (max-width: 980px) {
    display:none;
}
height:80px;
width:100vw;
padding:0 50px 0 80px;
display:flex;
align-items:center;
justify-content:space-between;
position:fixed;
top:0;
left:0;
z-index:20;
background:${({isDark})=>isDark?"rgb(53, 12, 54)":"lightslategray"};
`;

const Button = styled(motion.button)`
@media only screen and (max-width: 980px) {
    display:none;
}
min-width:180px;
font-family: "Poppins", sans-serif;
font-weight:bold;
color:white;
margin: auto 20px;
padding:5px;
height:40px;
border:5px solid white;
border-radius:30px;
outline:none;
background-color:black;
display:flex;
align-items:center;
justify-content:space-evenly;
cursor: pointer;
&:nth-child(${({btnlength})=>btnlength}){
    background-color:lightcoral;
}
&:hover{
    transition:all 0.2s ease-in-out;
    background:rgb(0, 255, 200);
    color:black;
    transform:scale(0.93);
}
`;

const ButtonContainer=styled.div`
@media only screen and (max-width: 980px) {
    display:none;
}
display:flex;
align-items:center;
`;

const ThemeButton = styled(motion.button)`
@media only screen and (max-width: 980px) {
    display:none;
}
margin: auto 20px;
height:40px;
width:40px;
border:5px solid white;
border-radius:50%;
outline:none;
background:black;
display:flex;
align-items:center;
justify-content:center;
color:white;
cursor: pointer;
&:hover{
    color:black;
    transition:all 0.2s ease-in-out;
    background:rgb(0, 255, 200);
    transform:scale(0.93);
}
`;