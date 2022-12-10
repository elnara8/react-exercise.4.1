import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <button type="button" onClick={() => console.log("Button click!")}>
        Click!
      </button>
    );
  }
}
export default App;
