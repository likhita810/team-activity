import React from 'react'

class OpenTickets extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {solutionErr} = this.props
        // {console.log(solutionErr)}
        return(
            <>
                <h2>Open Tickets</h2>
                {
                    this.props.prop1.map((item) => (
                        <>
                            <h3>Ticket Issue: {item.ticketIssue}</h3>
                            <p>Ticket Rising Time: {item.trise}</p>

                            <p>Priority: {item.priority}</p>
                            Solution: <textarea onBlur={(e)=> this.props.prop3(e,'solution')}></textarea>

                            <p style={{color:'red'}}>{solutionErr}</p>
                            <button onClick={() => this.props.prop2(item.id)}>Close Ticket</button>
                        </>
                    ))
                }
            </>
        )
    }
}

export default OpenTickets;