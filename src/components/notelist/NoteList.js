import React, { Component } from "react";
import NoteListElement from "./NoteListElement";

class NoteList extends Component {
    render() {
        return (
            <aside className="note-list">
                <NoteListElement title="Notiz 1" excerpt="" />
                <NoteListElement title="Notiz 2" excerpt="" />
                <NoteListElement title="Notiz 3" excerpt="" />
            </aside>
        );
    }
}

export default NoteList;
