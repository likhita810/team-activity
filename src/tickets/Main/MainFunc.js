import { useNavigate } from "react-router-dom"
import Main from './Main'

function MainFunc() {
    let navigate = useNavigate()   
    return(
        <>
            <Main nav={{navigate}}></Main>
        </>
    )
}
export default MainFunc