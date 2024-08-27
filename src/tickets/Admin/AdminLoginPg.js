import { useNavigate } from "react-router-dom"
import AdminLogClass from "./AdminClass"

function AdminLoginPg() {
    let navigate = useNavigate()   
    return(
        <>
            <AdminLogClass nav={{navigate}}></AdminLogClass>
        </>
    )
}
export default AdminLoginPg