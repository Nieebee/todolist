import { Component } from "react";
import Main from "./Components/Main"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
  }
  `

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Main/>
      </div>
    );
  }
}

export default App;
