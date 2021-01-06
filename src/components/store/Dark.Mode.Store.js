import React,{useState} from 'react'

const DarkModeStore = React.createContext();
const {Provider} = DarkModeStore;

const DarkModeProvider = ({children}) =>{

    const [isDark,setIsDark]=useState(false);

    const state = {
        isDark
    };

    const actions = {
        setIsDark
    }

    return <Provider value={{...state,...actions}}>{children}</Provider>
}


export {DarkModeProvider,DarkModeStore};