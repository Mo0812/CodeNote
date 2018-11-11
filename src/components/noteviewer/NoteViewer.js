import React, { Component } from "react";
import showdown from "showdown";

class NoteViewer extends Component {
    constructor(props) {
        super(props);
        this.converter = new showdown.Converter();
    }

    render() {
        const parsedContent = this.converter.makeHtml(this.props.content);
        return (
            <section
                className="note-viewer"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
        );
    }
}

export default NoteViewer;
