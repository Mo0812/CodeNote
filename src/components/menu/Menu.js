import React, { Component } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

class Menu extends Component {
    render() {
        return (
            <header className="header">
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Blueprint</Navbar.Heading>
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
                </Navbar>
            </header>
        );
    }
}

export default Menu;
