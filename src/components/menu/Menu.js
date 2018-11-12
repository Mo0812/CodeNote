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
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <ButtonGroup>
                            <Button
                                icon="code"
                                onClick={this.onViewAction(Global.CODE_VIEW)}
                                active={
                                    this.props.viewMode === Global.CODE_VIEW
                                        ? true
                                        : false
                                }
                            />
                            <Button
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
                                icon="eye-open"
                                onClick={this.onViewAction(Global.PREVIEW_VIEW)}
                                active={
                                    this.props.viewMode === Global.PREVIEW_VIEW
                                        ? true
                                        : false
                                }
                            />
                        </ButtonGroup>
                        <Navbar.Divider />
                        <Button minimal={true} icon="user" />
                        <Button minimal={true} icon="settings" />
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
