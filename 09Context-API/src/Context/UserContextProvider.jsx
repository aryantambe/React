import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{ //children is the special prop
    const [user,setUser]=useState(null); //defining a  state variable
    return(
        <UserContext.Provider value={{user,setUser}}> {/*giving value to the context i created earlier*/}
        {children} {/*children is any component*/}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// Thing	                                     What it means
// children	                             Whatever component is inside UserContextProvider
// UserContext.Provider	                The actual source of the data for the context
// value={{ user, setUser }}	        This is the data you’re sharing globally
// useContext(UserContext)	            How components get that shared data