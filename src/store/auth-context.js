import React from "react";

const AuthContext = React.createContext({
    //this is just an initial value
    isLoggedIn: false
});

export default AuthContext;