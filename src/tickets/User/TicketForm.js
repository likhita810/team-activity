import React from "react";
import axios from 'axios';
import './ticketformstyle.css'

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            uName: '',
            ticketIssue: '',
            priority: '',
            status: false,
            trise: '',
            ticketsList: []
        }
    }

    handleChange=(e, keyword) => {
        if(keyword === 'issue') {
            this.setState({ticketIssue: e.target.value})
        } else if (keyword === 'priority'){
            this.setState({priority: e.target.value})
        } else {
            this.setState({trise: e.target.value})
        }
    }

    handleCreateTicket = (e) => {
        axios.post('http://localhost:3001/ticketDetails', {
            ticketIssue: this.state.ticketIssue,
            priority: this.state.priority,
            trise: this.state.trise,
            status: this.state.status
        }).then((res)=> {
            console.log(res)
            const tickets = [...this.state.ticketsList, res.data]
            this.setState({ticketsList: tickets})
            console.log('then')
        }).catch((err) => console.log('err'))
    }

    render() {
        return(
            <>
                <div className="complaints-form">
                    <h3>Ticket Rise</h3>
                <form>
                    <div>
                        <label>User name: </label>
                        <input type="text" required></input>
                    </div>

                    <div>
                        <label>Ticket Issue: </label>
                        <input type="text" onChange={(e)=>this.handleChange(e, 'issue')} required></input>
                    </div>

                    <div>
                        <label>Priority: </label>
                            <input type="radio" onChange={(e)=>this.handleChange(e, 'priority')} name="priority" value="1"/>1
                            <input type="radio" onChange={(e)=>this.handleChange(e, 'priority')} name="priority" value="2"/>2
                            <input type="radio" onChange={(e)=>this.handleChange(e, 'priority')} name="priority" value="3"/>3
                            <input type="radio" onChange={(e)=>this.handleChange(e, 'priority')} name="priority" value="4"/>4
                            <input type="radio" onChange={(e)=>this.handleChange(e, 'priority')} name="priority" value="5"/>5

                    </div>

                    <div>
                        <label>Ticket Rising time: </label>
                        <input onChange={(e)=>this.handleChange(e, 'trise')}></input>
                    </div>
                    <div>
                <button onClick={(e)=> this.handleCreateTicket(e)}>Create Ticket</button>
                </div>
                </form>
                </div>
            </>
        )
    }
}

export default TicketForm