import React, { Component } from "react";
import Menu from "../menu/Menu";
import "./App.scss";
import NoteContainer from "../notecontainer/NoteContainer";

import * as Global from "../../constants";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: Global.CODE_PREVIEW_VIEW
        };
    }
    render() {
        return (
            <main className="app bp3-dark">
                <Menu
                    viewMode={this.state.viewMode}
                    onViewChange={this.onViewChange}
                />
                <NoteContainer viewMode={this.state.viewMode} />
                <footer className="statusbar" />
            </main>
        );
    }

    onViewChange = option => {
        this.setState({
            viewMode: option
        });
    };
}

export default App;
