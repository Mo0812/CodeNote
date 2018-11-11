import React, { Component } from "react";
import { H2 } from "@blueprintjs/core";

import "./NoteListElement.scss";
import { throws } from "assert";

class NoteListElement extends Component {
    render() {
        return (
            <article className="note-list-element">
                <strong className="title">{this.props.title}</strong>
                <p class="excerpt">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </article>
        );
    }
}

export default NoteListElement;
