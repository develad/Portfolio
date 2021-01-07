import React,{useState,useContext} from 'react'
import { motion } from "framer-motion";
import * as fa from 'react-icons/fa';
import * as ri from 'react-icons/ri';
import styled from 'styled-components'
import scroll from 'react-scroll'
import { Sling as Hamburger } from 'hamburger-react'
import {DarkModeStore} from '../store/Dark.Mode.Store'
import {ScrollingStore} from '../store/Scrolling.Page.Store'

const navButtonsMobile = [
    {
        titleBtn:"Home",
        icon:<fa.FaHome/>
    },
    {
        titleBtn:"Skills",
        icon:<fa.FaCubes/>
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

function MobileNavbar() {

const [isClicked,setisClicked]=useState(true);
const [isOpen, setOpen] = useState(false);
const{isDark,setIsDark} = useContext(DarkModeStore);
const{ButtonClickedHandler} = useContext(ScrollingStore);

    return (
        <>
        <Bars
        initial={{opacity:0,scale:0,rotate:0}}
        animate={{opacity:1,scale:1,rotate:720}}
        transition={{type:"tween",duration:0.4,delay:0.4}}
        isOpen={isOpen}
        isDark={isDark}
        onClick={()=>setisClicked(!isClicked)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </Bars>

        <MobileBox
        style={
            isClicked?
            {right:'-100vw',opacity:'0.4',transition:'all 0.5s ease'}:
            {right:'0px',opacity:'1', transition:'all 0.5s ease'}
        }
        isDark={isDark}
        >
            <BigText
                    animate={isClicked?{ opacity: 0, y:-20 }:{ opacity: 1, y:0 }}
                    transition={{
                      type:"tween",
                      duration:0.1,
                      delay:0.2  
                    }}
                    onClick={()=>{
                    setOpen(!isOpen)
                    setisClicked(!isClicked)
                    scroll.animateScroll.scrollToTop()}}>elad bar
            </BigText>
            <ButtonContainer>
            {navButtonsMobile.map((btn,index) =>{
                return(
                    <Button
                    animate={isClicked?{ rotate: 0, scale: 0 }:{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    key={index}
                    btnlength={navButtonsMobile.length}
                    onClick={()=>{
                        setOpen(!isOpen)
                        setisClicked(!isClicked)
                        ButtonClickedHandler(btn.titleBtn)
                            }}
                    >
                    {btn.icon}&nbsp;{btn.titleBtn}
                    </Button>
                )
            })}

            </ButtonContainer>
        </MobileBox>
        <MobileThemeButton
            initial={{opacity:0,scale:0,rotate:0}}
            animate={{opacity:1,scale:1,rotate:720}}
            transition={{type:"tween",duration:0.4,delay:0.4}}
            isDark={isDark}
            onClick={()=> {
                setIsDark(!isDark)
            }}>

            {isDark?
                <fa.FaSun style={{color:'white'}}/>:
                <ri.RiMoonClearFill style={{color:'rgb(80,80,80)'}}/>}
        </MobileThemeButton>
        </>
    )
}

export default MobileNavbar

const BigText=styled(motion.h3)`
display:none;

@media only screen and (max-width: 980px) { 
display:block;
font-family:Bungee;
text-shadow: 2px 4px lightcoral;
cursor: pointer;
transition:all 0.5s ease;
&:hover{
text-shadow: 2px 4px lime;
}
margin-bottom: 4rem;
font-size:60px;
}

@media only screen and (max-width: 350px) {
padding-top:2rem;
margin-bottom:2rem;
font-size:30px
}
`;

const MobileBox = styled.div`
display:none;

@media only screen and (max-width: 980px) {
display:inline-block;
height:100vh;
width:100vw;
padding:10px;
background:${({isDark})=>isDark?"linear-gradient(rgb(7, 2, 26) 50%,MediumSpringGreen)":"linear-gradient(rgb(80,80,80) 50%,MediumSpringGreen)"};
display:flex;
flex-direction:column;
align-items:center;
padding-top:6rem;
position:fixed;
z-index:15;
}

@media only screen and (max-width: 380px) {
padding-top:0rem;
justify-content:flex-start;
}
`;

const Bars = styled(motion.h1)`
display:none;
@media only screen and (max-width: 980px) {
display:flex;
align-items:center;
color:${({isDark,isOpen})=>(isDark || isOpen) ?"white":"rgb(80,80,80)"};
transition:0.5s ease;
position:fixed;
top:5px;
right:5px;
z-index:25;
}
`;

const Button = styled(motion.button)`
display:none;
@media only screen and (max-width: 980px) {
display:block;
font-family: "Poppins", sans-serif;
font-weight:bold;
color:white;
border:5px solid white;
outline:none;
background-color:black;
display:flex;
align-items:center;
&:nth-child(${({btnlength})=>btnlength}){
background-color:lightcoral;
}
&:hover{
transition:all 0.2s ease-in-out;
background:rgb(0, 255, 200);
color:black;
}

font-size:30px;
height:80px;
margin: 20px auto;
padding:10px 30px;
min-width:90vw;
justify-content:space-between;
flex-direction:row-reverse;
border-radius:20px;
}

@media only screen and (max-width: 350px) {
font-size:20px;
border-radius:10px;
height:60px;
min-width:80vw;
}
`;

const ButtonContainer=styled.div`
display:none;
@media only screen and (max-width: 980px) {
display:block;
align-items:center;
height:50%;
flex-direction:column;
justify-content:center;
}
`;

const MobileThemeButton = styled(motion.button)`
display:none;

@media only screen and (max-width: 980px) {
display:block;
height:40px;
width:40px;
border-radius:50%;
outline:none;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
position:fixed;
top:55px;
right:9px;
margin:0;
z-index:5;
transition:0.5s ease;
border:${({isDark})=>isDark?"3px solid white":"3px solid rgb(80,80,80)"};
background:${({isDark})=>isDark?"rgba(7, 2, 26, 0.5)":" rgba(255, 255, 255, 0.5)"};
}
`;