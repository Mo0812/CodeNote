import React, { Component } from "react";

import "./NoteListElement.scss";

class NoteListElement extends Component {
    render() {
        return (
            <article className="note-list-element" onClick={this.props.onClick}>
                <strong className="title">{this.props.title}</strong>
                <p className="excerpt">{this.props.excerpt}</p>
            </article>
        );
    }
}

export default NoteListElement;
