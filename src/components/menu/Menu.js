import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Button, Alignment, ButtonGroup } from "@blueprintjs/core";

import * as Global from "../../constants";

class Menu extends Component {
    render() {
        const path = window.location.pathname;
        return (
            <header className="header">
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>CodeNotes</Navbar.Heading>
                        <Navbar.Divider />
                        {path !== Global.PATH_MAIN ? (
                            <NavLink to={Global.PATH_MAIN}>
                                <Button icon="chevron-left" minimal={true} />
                            </NavLink>
                        ) : (
                            ""
                        )}
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        {path === Global.PATH_MAIN ? (
                            <ButtonGroup>
                                <Button
                                    icon="code"
                                    onClick={this.onViewAction(
                                        Global.CODE_VIEW
                                    )}
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
                                    onClick={this.onViewAction(
                                        Global.PREVIEW_VIEW
                                    )}
                                    active={
                                        this.props.viewMode ===
                                        Global.PREVIEW_VIEW
                                            ? true
                                            : false
                                    }
                                />
                            </ButtonGroup>
                        ) : (
                            ""
                        )}

                        <Navbar.Divider />
                        <NavLink
                            to={
                                path === Global.PATH_USER
                                    ? Global.PATH_MAIN
                                    : Global.PATH_USER
                            }
                        >
                            <Button
                                minimal={true}
                                icon="user"
                                active={path === Global.PATH_USER}
                            />
                        </NavLink>
                        <NavLink
                            to={
                                path === Global.PATH_SETTINGS
                                    ? Global.PATH_MAIN
                                    : Global.PATH_SETTINGS
                            }
                        >
                            <Button
                                minimal={true}
                                icon="settings"
                                active={path === Global.PATH_SETTINGS}
                            />
                        </NavLink>
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
