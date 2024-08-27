import React from 'react'

class ClosedTickets extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <h2>Closed Tickets</h2>
                {
                    this.props.prop1.map((item) => (
                        <>
                            <h3>Ticket Issue: {item.ticketIssue}</h3>
                            <p>{item.tsolve}</p>
                        </>
                    ))
                }
            </>
        )
    }
}

export default ClosedTickets;