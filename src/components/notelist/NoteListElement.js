import React, { Component } from "react";

class NoteListElement extends Component {
    render() {
        return (
            <article
                className={
                    "note-list-element " + (this.props.active ? "active" : "")
                }
                onClick={this.props.onClick}
            >
                <strong className="title">{this.props.title}</strong>
                <p className="excerpt">{this.props.excerpt}</p>
            </article>
        );
    }
}

export default NoteListElement;
