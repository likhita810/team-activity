import { useNavigate } from "react-router-dom"
import TicketsDisplay from './TicketsDisplay'

function TeamFunc() {
    let navigate = useNavigate()   
    return(
        <>
            <TicketsDisplay nav={{navigate}}></TicketsDisplay>
        </>
    )
}
export default TeamFunc