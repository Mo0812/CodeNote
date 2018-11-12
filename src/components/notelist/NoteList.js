import React, { Component } from "react";
import PubSub from "pubsub-js";
import { ButtonGroup, Button } from "@blueprintjs/core";
import NoteListElement from "./NoteListElement";
import API from "../../api/API";

import "./NoteList.scss";

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
            <aside className="note-list-container">
                <header className="note-list-header">
                    <ButtonGroup minimal={true} fill={true}>
                        <Button icon="add-to-artifact" onClick={this.addNote}>
                            New
                        </Button>
                    </ButtonGroup>
                </header>
                <section className="note-list">
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
                </section>
            </aside>
        );
    }

    componentDidMount() {
        this.getNoteList();
        this.token = PubSub.subscribe(this.props.pubSubQueue, (msg, data) => {
            this.getNoteList();
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    addNote = () => {
        const newId = this.api.addNote();
        this.props.onOpenNote(newId);
    };

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
