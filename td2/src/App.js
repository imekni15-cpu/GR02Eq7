import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pictogramme from "./Composants/Pictogramme";
import Commentaire from "./Composants/Commentaire";
import "font-awesome/css/font-awesome.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-primary">Débuter avec React</h1>
        <p>Bonne découverte des composants React</p>
        <Pictogramme />
        <Commentaire />
      </div>
    );
  }
}

export default App;