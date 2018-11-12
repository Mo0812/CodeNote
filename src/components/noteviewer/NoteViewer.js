import React, { Component } from "react";
import showdown from "showdown";
import API from "../../api/API";

class NoteViewer extends Component {
    constructor(props) {
        super(props);
        this.api = new API();
        this.converter = new showdown.Converter();
    }

    render() {
        const parsedContent = this.getContent(this.props.contentId);
        return (
            <section
                className="note-viewer"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
        );
    }

    getContent(id) {
        const note = this.api.getNote(this.props.contentId);
        if (typeof note !== "undefined") {
            return this.converter.makeHtml(note.content);
        } else {
            return "";
        }
    }
}

export default NoteViewer;
