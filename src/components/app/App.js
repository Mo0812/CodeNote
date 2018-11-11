import React, { Component } from "react";
import Menu from "../menu/Menu";
import "./App.scss";
import NoteContainer from "../notecontainer/NoteContainer";

class App extends Component {
    render() {
        return (
            <main className="app bp3-dark">
                <Menu />
                <NoteContainer />
            </main>
        );
    }
}

export default App;
