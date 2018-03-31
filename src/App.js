import React, { Component } from "react";
import "./App.css";
import AvatarPicker from "./components/AvatarPicker/AvatarPicker";
import { AVATARS } from "./data/AVATARS";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AvatarPicker avatars={AVATARS} />
      </div>
    );
  }
}

export default App;
