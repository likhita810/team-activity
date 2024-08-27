import React from "react";
import {Link, Outlet} from "react-router-dom"

class TicketsDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    // handleTeam= (e) => {
    //     const {navigate} = this.props.nav
    //     navigate('team')
    // }
    render() {
        return(
            <>
                <h1 className="headerStyle">You can view all tickets here</h1>
                <div className="ticBtnDis">
                    <Link to='tickets'><button>Tickets</button></Link>
                    <Link to='sortedtickets'><button>Sorted Tickets</button></Link>
                    <Link to="team"><button className="team">Team Members</button></Link>
                </div>
                {/* <Link to='tickets'><button>Tickets</button></Link>
                <Link to='sortedtickets'><button>Sorted Tickets</button></Link> */}
                <Outlet></Outlet>
                {/* <button onClick={(e)=> this.handleTeam(e)} className="team">Team Members</button> */}
            </>
        )
    }
}

export default TicketsDisplay