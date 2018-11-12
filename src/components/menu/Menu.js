import React, { Component } from "react";
import { Navbar, Button, Alignment, ButtonGroup } from "@blueprintjs/core";

import * as Global from "../../constants";

class Menu extends Component {
    render() {
        return (
            <header className="header">
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>CodeNotes</Navbar.Heading>
                        <Navbar.Divider />
                        <Button
                            className="bp3-minimal"
                            icon="home"
                            text="Home"
                        />
                        <Button
                            className="bp3-minimal"
                            icon="document"
                            text="Files"
                        />
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <ButtonGroup>
                            <Button
                                className="bp3-minimal"
                                icon="code"
                                onClick={this.onViewAction(Global.CODE_VIEW)}
                                active={
                                    this.props.viewMode === Global.CODE_VIEW
                                        ? true
                                        : false
                                }
                            />
                            <Button
                                className="bp3-minimal"
                                icon="grid-view"
                                onClick={this.onViewAction(
                                    Global.CODE_PREVIEW_VIEW
                                )}
                                active={
                                    this.props.viewMode ===
                                    Global.CODE_PREVIEW_VIEW
                                        ? true
                                        : false
                                }
                            />
                            <Button
                                className="bp3-minimal"
                                icon="eye-open"
                                onClick={this.onViewAction(Global.PREVIEW_VIEW)}
                                active={
                                    this.props.viewMode === Global.PREVIEW_VIEW
                                        ? true
                                        : false
                                }
                            />
                        </ButtonGroup>
                    </Navbar.Group>
                </Navbar>
            </header>
        );
    }

    onViewAction = option => () => {
        this.setState({
            viewMode: option
        });
        this.props.onViewChange(option);
    };
}

export default Menu;
