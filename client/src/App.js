import React, { Component } from "react";
import PaypalButtons from "./components/PaypalButtons";
import khana from "./assets/img/khana.jpg";

import "./App.css";

class App extends Component {
  state = {
    showPaypal: false
  }; 

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PaypalButtons />;
    } else {
      return (
        <div className="main">
          <h2> Buy this Meal at a giveaway price (Super Cheap) </h2>
          <img alt="dada" src={khana} />
          <h3>
            <b>$200</b>
          </h3>
          <button onClick={this.showPaypalButtons}> Pay </button>
        </div>
      );
    }
  }
}

export default App;
