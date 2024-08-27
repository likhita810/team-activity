import React from "react";
import { Outlet, Link} from "react-router-dom"

class DashBoard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <h1 className="headerStyle">Tickets DashBoard</h1>

                <div className="ticBtn">
                    <Link to='ticketform'><button>Raise Ticket</button></Link>
                    <Link to='viewtickets'><button>View Tickets</button></Link>
                </div>
                <Outlet></Outlet>
            </>
        )
    }
}

export default DashBoard