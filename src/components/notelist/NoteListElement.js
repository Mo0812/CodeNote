import React, { Component } from "react";
import { Popover, Icon, Menu, Position } from "@blueprintjs/core";

class NoteListElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contextMenuIsOpen: undefined
        };
    }
    render() {
        return (
            <article
                className={
                    "note-list-element " + (this.props.active ? "active" : "")
                }
                onClick={this.handleClick}
                onContextMenu={null}
            >
                <strong className="title">{this.props.title}</strong>
                <p className="excerpt">{this.props.excerpt}</p>
                <Popover
                    content={
                        <Menu>
                            <Menu.Item
                                icon="export"
                                onClick={this.handleContextMenuClick("export")}
                                text="Export"
                            />
                            <Menu.Item
                                icon="print"
                                onClick={this.handleContextMenuClick("print")}
                                disabled={true}
                                text="Print"
                            />
                            <Menu.Divider />
                            <Menu.Item
                                text="Remove"
                                icon="trash"
                                onClick={this.handleContextMenuClick("remove")}
                            />
                        </Menu>
                    }
                    position={Position.BOTTOM}
                    isOpen={this.state.contextMenuIsOpen}
                    className="action-menu"
                >
                    <Icon icon="more" className="action-button" />
                </Popover>
            </article>
        );
    }

    handleContextMenuOpen = () => {
        const nextState =
            this.state.contextMenuIsOpen === true ? undefined : true;
        this.setState({
            contextMenuIsOpen: nextState
        });
    };

    handleClick = () => {
        this.props.onClick();
    };

    handleContextMenuClick = action => () => {
        this.props.onContextMenuAction(action);
    };
}

export default NoteListElement;
