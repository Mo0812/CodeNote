import React, { Component } from "react";
import { Omnibar } from "@blueprintjs/select";

class CommandPalette extends Component {
    render() {
        return (
            <Omnibar
                isOpen={this.props.active}
                itemRenderer={null}
                items={[]}
                onItemSelect={null}
            />
        );
    }
}

export default CommandPalette;
