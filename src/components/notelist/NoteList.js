import React, { Component } from "react";
import NoteListElement from "./NoteListElement";

class NoteList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="note-list">
                {this.props.notes.map(note => {
                    return (
                        <NoteListElement
                            key={note.id}
                            title={note.title}
                            excerpt={note.content}
                            onClick={this.noteClicked(note.id)}
                        />
                    );
                })}
            </aside>
        );
    }

    noteClicked = id => () => {
        this.props.onOpenNote(id);
    };
}

export default NoteList;
