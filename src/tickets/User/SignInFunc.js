import React from "react";
import {useNavigate} from "react-router-dom";
import SignIn from "./SignIn";

function SignInFunc(){
    let navigate = useNavigate()
    return(
        <>
            <SignIn nav = {{navigate}}></SignIn>
        </>
    )
}
export default SignInFunc