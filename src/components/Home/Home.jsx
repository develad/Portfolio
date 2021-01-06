import React,{useContext} from 'react'
import styled from 'styled-components'
import MainBox from './mainBox/MainBox'
import Profilebox from './ProfileBox/Profilebox'
import {motion} from 'framer-motion'
import {DarkModeStore} from '../store/Dark.Mode.Store'

function Home() {

  const {isDark} = useContext(DarkModeStore)

    return (
        <Page id="Home" isDark={isDark}>
            <Container 
            initial={{opacity:0, y:-250}}
            animate={{opacity:1, y:0}}
            transition={{type:"spring", stiffness:200,delay:0.5}}
            >
            <Profilebox/>
            <MainBox/>
            </Container>
        </Page>
    )
}

export default Home

const Page = styled.div`
min-height:100vh;
min-width:100vw;
display:flex;
justify-content:center;
background-color:${({isDark})=>isDark?"rgb(7, 2, 26)":"rgb(42, 212, 161)"};
transition:background-color 0.4s ease;

@media only screen and (max-width: 980px) {
background-color:${({isDark})=>isDark?"rgb(7, 2, 26)":"white"};
transition:background-color 0.4s ease;} 
`;

const Container = styled(motion.div)`
margin:auto 0;
padding:7rem;
display:flex;
justify-content:center;

@media only screen and (max-width: 980px) {
flex-direction:column;
padding:0;
} 
`