import React, { Component } from "react";
import NoteList from "../notelist/NoteList";
import NoteEditor from "../noteeditor/NoteEditor";
import NoteViewer from "../noteviewer/NoteViewer";
import "./NoteContainer.css";

const MARKDOWN_CHANGE_QUEUE = "mdchange";

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: null
        };
    }

    render() {
        return (
            <section className="note-container">
                <NoteList
                    pubSubQueue={MARKDOWN_CHANGE_QUEUE}
                    activeId={this.state.openNote}
                    onOpenNote={id => this.openNote(id)}
                />
                <NoteEditor
                    pubSubQueue={MARKDOWN_CHANGE_QUEUE}
                    contentId={this.state.openNote}
                />
                <NoteViewer pubSubQueue={MARKDOWN_CHANGE_QUEUE} />
            </section>
        );
    }

    openNote = id => {
        this.setState({
            openNote: id
        });
    };
}

export default NoteContainer;
