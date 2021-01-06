import React,{useState} from 'react'
import {scroller} from 'react-scroll'

const ScrollingStore = React.createContext();
const {Provider} = ScrollingStore;

const ScrollingPageProvider = ({children}) => {

        const [isScrolling,setisScrolling]=useState(false);
        
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 100){
                setisScrolling(true)
                } else {
                setisScrolling(false) 
                }
        })   
            
        const ButtonClickedHandler = (ScrollToDestination="scrollTest") => {
            scroller.scrollTo(ScrollToDestination, {
            duration: 1500,
            smooth: true,
            })
        }

        const state = {
            isScrolling
        };
    
        const actions = {
            setisScrolling,
            ButtonClickedHandler
        }
    
        return <Provider value={{...state,...actions}}>{children}</Provider>
}

export {ScrollingPageProvider,ScrollingStore};