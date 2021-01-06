import React,{useContext} from 'react'
import styled from 'styled-components'
import * as fa from 'react-icons/fa'
import {DarkModeStore} from '../store/Dark.Mode.Store'
import Footer from '../Footer/Footer'

function Contact() {

    const {isDark} = useContext(DarkModeStore);

    return (
        <Page id="CONTACT ME" isDark={isDark}>

                <Title isDark={isDark}>Let's Keep in Touch...</Title>
                <FormContiner>
                    <Form isDark={isDark} name="contact" method="post" >
                    <Input type="hidden" name="form-name" value="contact" />
                    <Input type="hidden" name="subject" value="דואר חדש מטופס יצירת קשר"/>
                    <label htmlFor="fullname">Full Name:</label>
                    <Input isDark={isDark} type="text" id="fullname" name="full name" required/>
                    <label htmlFor="email">E-mail:</label>
                    <Input isDark={isDark} type="email" id="email" name="email" required/>
                    <label htmlFor="subject">Subject:</label>
                    <Input isDark={isDark} type="text" id="subject" name="subjectForm" required/>
                    <label htmlFor="description">Description:</label>
                    <Textarea isDark={isDark} rows="6" id="description" name="description" required></Textarea>
                    <Button isDark={isDark} type="submit">Submit<fa.FaRocketchat/></Button>
                    </Form>
                    <Img src="images/React.jpg" isDark={isDark}/>
                </FormContiner>
                <Footer/>
                <Footerimg
                src="images/astronaut.svg"
                isDark={isDark}
                />
        </Page>       
    )
}

export default Contact

const Page = styled.div`
min-height:100vh;
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position: relative;
background-color:${({isDark})=>isDark?"rgb(7, 2, 26)":"rgb(42, 212, 161)"};
transition:background-color 0.4s ease;
@media only screen and (max-width: 980px) {
  justify-content:flex-start;
  background-color:${({isDark})=>isDark?"rgb(7, 2, 26)":"white"};
  transition:background-color 0.4s ease;
} 
`;

const Footerimg = styled.img`
height:180px;
width:180px;
position: absolute;
bottom:20px;
right:50px;
z-index:1;
filter:${({isDark})=>isDark?"none":"hue-rotate(270deg)"};
transition:0.4s ease;
@media only screen and (max-width: 980px) {
display:none;
} 
`;

const Button =styled.button`
font-size:24px;
min-width:180px;
font-family: "Bungee", sans-serif;
font-weight:bold;
color:${({isDark})=>isDark?"white":"yellow"};
margin: 20px;
padding:20px 5px;
height:40px;
border:5px solid white;
border-radius:20px;
outline:none;
transition:0.4s ease;
background-color:${({isDark})=>isDark?"black":"rgb(80,80,80)"};
display:flex;
align-items:center;
justify-content:space-evenly;
cursor: pointer;
&:hover{
    transition:all 0.2s ease-in-out;
    background:rgb(0, 255, 200);
    color:black;
}

@media only screen and (max-width: 350px) {
    font-size:20px;
    border-radius:10px;
}
`;

const Form=styled.form`
font-family: "Poppins", sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 450px;
width: 450px;
border: 3px solid white;
background-color:${({isDark})=>isDark?"black":"rgb(80,80,80)"};
transition: 0.4s ease;
@media only screen and (max-width: 980px) {
    margin-top:2rem;
    min-height:50vh;
    width:100vw;
    border:none;
}
`;

const Img=styled.img`
border-bottom-right-radius:80px;
max-height:450px;
border-top: 3px solid white;
border-bottom: 3px solid white;
border-right: 3px solid white;
filter:${({isDark})=>isDark?"hue-rotate(90deg)":"none"};
transition:0.4s ease;
@media only screen and (max-width: 980px) {
    margin-top:2rem;
    width:75%;
    height:100%;
    border-bottom-right-radius:0px;
    border-top: none;
    border-bottom: none;
    border-right: none;
    border-radius:20px;
    border:${({isDark})=>isDark?"4px solid white":"4px solid rgb(80,80,80)"};
}
`;

const Title=styled.h1`
text-align:center;
padding-top:4rem;
font-family:Bungee;
font-size: 3rem;
background-color:transparent;

@media only screen and (max-width: 980px) {
width:75%;
text-align:left;
color:${({isDark})=>isDark?"white":"MediumSpringGreen"};
transition:color 0.4s ease;
padding-top:1rem;
text-shadow: 3px 2px rgb(80,80,80);
}
`;

const FormContiner = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
z-index:2;
@media only screen and (max-width: 980px) {
    flex-direction:column-reverse;
}
`;

const Input = styled.input`
width: 100%;
border: none;
padding: 0 1rem;
font-size: 1rem;
font-family: "Bungee", sans-serif;
color:${({isDark})=>isDark?"white":"black"};
background: ${({isDark})=>isDark?"rgb(7, 2, 26)":"Gainsboro"};
transition:0.4s ease;
&:focus{
    outline: 3px solid Tomato;
}
@media only screen and (max-width: 980px) {
    background: ${({isDark})=>isDark?"rgb(7, 2, 26)":"white"};
    font-size: 1.1rem;
    padding: 0.35rem 1rem;
}
`;

const Textarea =styled.textarea`
width: 100%;
min-height:4rem;
border: none;
padding: 0 1rem;
font-size: 1rem;
font-family: "Bungee", sans-serif;
color:${({isDark})=>isDark?"white":"black"};
background: ${({isDark})=>isDark?"rgb(7, 2, 26)":"Gainsboro"};
transition:0.4s ease;
&:focus{
    outline: 3px solid Tomato;
}
@media only screen and (max-width: 980px) {
    background: ${({isDark})=>isDark?"rgb(7, 2, 26)":"white"};
    padding: 0.5rem 1rem;
}
`;