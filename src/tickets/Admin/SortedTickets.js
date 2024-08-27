import React from "react";
import axios from "axios";
import OpenTickets from './OpenTickets';
import ClosedTickets from './ClosedTickets';
import './ticketstyles.css'

class SortedTickets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets : [],
            ticketIssue:"",
            priority:'',
            status: false,
            trise:"",
            tsolve:"",
            solution: '',
            solutionErr: '',
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/ticketDetails").then((res)=>this.setState({tickets: res.data})).catch
        ((err)=>console.log("error"))
    }

    getOpenTickets = (ticketId) => {
        const openTickets = this.state.tickets.filter(item => item.status === false)
        return openTickets
    }

    getClosedTickets = (ticketId) => {
        const closedTickets = this.state.tickets.filter(item => item.status === true )
        return closedTickets
    }

    handleTicketValidation = (e, keyword) => {
        if (keyword === 'solution') {
            if(e.target.value) {
                this.setState({solution: e.target.value})
                console.log('if block')
            } else {
                this.setState({solutionErr: "Cant close a ticket without resolving the issue"})
            console.log('else block')
            }
        }
    }

    changeActiveStatus = (ticketId) => {
        const ticketObjects = this.state.tickets
        const openTicket = ticketObjects.find((item) => item.id === ticketId)
        openTicket.status = !openTicket.status
        this.setState({tickets: ticketObjects})
    }

    render() {
        const sortedTickets = this.state.tickets.sort((a,b)=> b.priority - a.priority);

        return(
            <>
                {/* <h1  className="headerStyle">Sorted Tickets</h1> */}

                {/* {console.log(sortedTickets.taskIssue)} */}
                <div className="containerStyle">

                <div className="ticketSectionStyle">
                <OpenTickets prop1 = {this.getOpenTickets()} prop2 = {this.changeActiveStatus} prop3 = {this.handleTicketValidation} solutionErr = {this.state.solutionErr}></OpenTickets>
                </div>
                <div className="ticketSectionStyle" >
                <ClosedTickets prop1 = {this.getClosedTickets()}></ClosedTickets>
                </div>
                </div>
            </>
        )
    }
}

export default SortedTickets;