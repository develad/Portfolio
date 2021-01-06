import React,{useContext} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import Card from './Card';
import {projectsData} from './cardData'
import {DarkModeStore} from '../store/Dark.Mode.Store'

function Protfolio() {

    const {isDark} = useContext(DarkModeStore);
    return (
        <Page id="Projects" isDark={isDark}>
            <Warpper
            initial={{opacity:0, x:"-100vw"}}
            animate={{opacity:1, x:0}}
            transition={{type:"spring", stiffness:200,delay:0.5}}
            >
                <Title isDark={isDark}>Sample Projects</Title>
                    <Container>
                    {projectsData.map((project,index)=>
                        <Card project={project} key={index}/>)}
                    </Container>
            </Warpper>
        </Page>
    )
}

export default Protfolio

const Page = styled(motion.div)`
min-width:100vw;
min-height:100vh;
background-color:${({isDark})=>isDark?"rgb(7, 2, 26)":"DarkTurquoise"};
transition:background-color 0.4s ease;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media only screen and (max-width: 980px) {
background-color:${({isDark})=>isDark?"rgb(7, 2, 26)":"white"};
transition:background-color 0.4s ease;
}
`;

const Warpper = styled(motion.div)``;

const Container = styled.div`
max-width:1300px;
margin:0 auto;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:flex-start;

@media only screen and (max-width: 980px) {
flex-direction:column;
}
`;

const Title=styled.h1`
margin:0 auto;
text-align:center;
padding-top:4rem;
font-family:Bungee,sans-serif;
font-size: 3rem;

@media only screen and (max-width: 980px) {
width:75%;
color:${({isDark})=>isDark?"white":"MediumSpringGreen"};
transition:color 0.4s ease;
padding-top:1rem;
text-shadow: 3px 2px rgb(80,80,80);
padding-bottom:20px;
border-bottom:4px dashed rgb(80,80,80);
}
`;