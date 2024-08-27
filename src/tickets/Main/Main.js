import React from "react";
import "./page1.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCreate = (e) => {
    const { navigate } = this.props.nav;
    navigate("/login");
  };

  handleResolve = (e) => {
    const { navigate } = this.props.nav;
    navigate("/adminlogin");
  };

  render() {
    return (
      <div className="main">
        <h1 className="mainh1">Are you Here to Raise or Resolve a Ticket ??</h1>

        <div className="mainBtns">
          <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-ticket-icon-simple-style-png-image_5177952.jpg" className="imgclass"></img>

          <button className="create" onClick={(e) => this.handleCreate(e)}>
            Create a Ticket
          </button>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Fl_HYL2unml1D0m755PVwWmtWInfyKY_Ym0XvaCNxM8QWrHjyxAz6h-yOetKEA5j_7o&usqp=CAU" className="imgclass1"></img>
          <button className="resolve" onClick={(e) => this.handleResolve(e)}>
            Resolve a Ticket
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
