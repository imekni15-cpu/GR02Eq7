import React from "react";

class Commentaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { texte: "" };
  }

  handleChange = (e) => {
    this.setState({ texte: e.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          className="form-control"
          placeholder="Tapez un commentaire..."
          maxLength={120}
          value={this.state.texte}
          onChange={this.handleChange}
        ></textarea>
        <small>{120 - this.state.texte.length} Restants</small>
      </div>
    );
  }
}

export default Commentaire;