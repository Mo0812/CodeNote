import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../menu/Menu";
import NoteContainer from "../notecontainer/NoteContainer";
import Settings from "../settings/Settings";
import User from "../user/User";
import "./App.scss";

import * as Global from "../../constants";
import CommandPalette from "../commandpalette/CommandPalette";

const { ipcRenderer } = window.require("electron");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: Global.CODE_PREVIEW_VIEW,
            commandPalette: false
        };
    }
    render() {
        return (
            <main className="app bp3-dark">
                <Menu
                    viewMode={this.state.viewMode}
                    onViewChange={this.onViewChange}
                />
                <CommandPalette active={this.state.commandPalette} />
                <Switch>
                    <Route
                        exact
                        path={Global.PATH_MAIN}
                        component={props => (
                            <NoteContainer
                                viewMode={this.state.viewMode}
                                {...props}
                            />
                        )}
                    />
                    <Route path={Global.PATH_SETTINGS} component={Settings} />
                    <Route path={Global.PATH_USER} component={User} />}
                </Switch>
                <footer className="statusbar" />
            </main>
        );
    }

    componentDidMount() {
        ipcRenderer.on("command-palette", () => {
            this.setState({
                commandPalette: true
            });
        });
        ipcRenderer.on("esc", () => {
            var cp = this.state.commandPalette;
            if (cp) {
                cp = !cp;
            }
            this.setState({
                commandPalette: cp
            });
        });
    }

    onViewChange = option => {
        this.setState({
            viewMode: option
        });
    };
}

export default App;
