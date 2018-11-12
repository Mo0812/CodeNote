import React, { Component } from "react";
import PubSub from "pubsub-js";
import NoteListElement from "./NoteListElement";
import API from "../../api/API";

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.api = new API();
    }

    render() {
        return (
            <aside className="note-list">
                {this.state.notes.map(note => {
                    return (
                        <NoteListElement
                            key={note.id}
                            active={note.id === this.props.activeId}
                            title={note.title}
                            excerpt={note.content}
                            onClick={this.noteClicked(note.id)}
                        />
                    );
                })}
            </aside>
        );
    }

    componentDidMount() {
        this.getNoteList();
        this.token = PubSub.subscribe(this.props.pubSubQueue, (msg, data) => {
            var notes = this.state.notes;
            var updatedNotes = notes.map(note => {
                if (note.id === this.props.activeId) {
                    note.content = data;
                }
                return note;
            });
            this.setState({
                notes: updatedNotes
            });
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    noteClicked = id => () => {
        this.props.onOpenNote(id);
    };

    getNoteList() {
        const notes = this.api.getNotes();
        this.setState({
            notes: notes
        });
    }
}

export default NoteList;
