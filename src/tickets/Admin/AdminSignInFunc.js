import { useNavigate } from "react-router-dom"
import AdminSignIn from './AdminSignIn'

function AdminSignInFunc() {
    let navigate = useNavigate()   
    return(
        <>
            <AdminSignIn nav={{navigate}}></AdminSignIn>
        </>
    )
}
export default AdminSignInFunc