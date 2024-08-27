import axios from "axios";
import React from "react";

class TicketDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskdata: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/ticketDetails")
      .then((res) => this.setState({ taskdata: res.data }))
      .catch((err) => console.log("error", err));
  }

  getPriorityStyle(priority) {
    {console.log(priority)}
    switch (priority) {
      case 5:
        return { backgroundColor: "#05079d", color: "#fff"};
      case 4:
        return { backgroundColor: "#114aed", color: "#000" };
      case 3:
        return { backgroundColor: "#118ced", color: "#fff" };
      case 2:
        return { backgroundColor: "#33d1ff", color: "#fff" };
      case 1:
        return { backgroundColor: "#33fff0", color: "#fff" };
      default:
        return { backgroundColor: "#114aed", color: "#fff" };
    }
  }

  render() {
    return (
      <>
        <table style={{ border: "2px solid red"}}>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Ticket Issue</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Ticket Rise</th>
            </tr>
          </thead>
          <tbody>
            {this.state.taskdata.map((item, index) => (
              <tr key={index}>
                {/* <td>{item.id}</td> */}
                <td>{item.ticketIssue}</td>
                <td style={this.getPriorityStyle(item.priority)}>{item.priority}</td>
                <td>{item.status ? "Closed" : "Open"}</td>
                <td>{item.trise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default TicketDashboard;
