import React, { Component } from "react";
import API from "../../api/API";
import NoteList from "../notelist/NoteList";
import NoteEditor from "../noteeditor/NoteEditor";
import NoteViewer from "../noteviewer/NoteViewer";
import "./NoteContainer.css";

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: null,
            notes: []
        };
        this.api = new API();
    }

    render() {
        return (
            <section className="note-container">
                <NoteList
                    notes={this.state.notes}
                    onOpenNote={id => this.openNote(id)}
                />
                <NoteEditor
                    contentId={this.state.openNote}
                    onChange={this.updateResource}
                />
                <NoteViewer contentId={this.state.openNote} />
            </section>
        );
    }

    componentDidMount() {
        const notes = this.api.getNotes();
        this.setState({
            notes: notes
        });
    }

    openNote = id => {
        this.setState({
            openNote: id
        });
    };

    updateResource = () => {
        /*this.setState({
            openNote: this.state.openNote
        });*/
    };
}

export default NoteContainer;
