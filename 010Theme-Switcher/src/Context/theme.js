import { createContext,useContext } from "react";

export const ThemeContext=createContext({  //Giving default values to context
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider
//custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}