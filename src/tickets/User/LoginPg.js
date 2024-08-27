import { useNavigate } from "react-router-dom"
import LoginCls from "./LoginCls"

function LoginPg() {
    let navigate = useNavigate()   
    return(
        <>
            <LoginCls nav={{navigate}}></LoginCls>
        </>
    )
}
export default LoginPg