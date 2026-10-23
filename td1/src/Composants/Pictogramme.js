import React from "react";
import Icone from "./Icone";

class Pictogramme extends React.Component {
  constructor(props) {
    super(props);
    this.state = { aime: false };
  }

  handleClick = () => {
    this.setState({ aime: !this.state.aime });
  };

  render() {
    return (
      <div className="my-3">
        <button
          className={this.state.aime ? "btn btn-success" : "btn btn-primary"}
          onClick={this.handleClick}
        >
          <Icone /> {this.state.aime ? "Aimé" : "Aimer"}
        </button>
      </div>
    );
  }
}

export default Pictogramme;