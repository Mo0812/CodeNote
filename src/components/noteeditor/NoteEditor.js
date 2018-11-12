import React, { Component } from "react";
import { H1, EditableText, Callout, Code } from "@blueprintjs/core";
import API from "../../api/API";
import NoteMDEditor from "./NoteMDEditor";

import "./NoteEditor.scss";

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
        this.api = new API();
    }

    render() {
        const note = this.state.note;
        if (note !== null) {
            return (
                <section className="note-editor-container">
                    <header className="note-editor-title">
                        <H1>
                            <EditableText
                                value={note.title}
                                onChange={this.onChange("title")}
                            />
                        </H1>
                    </header>
                    <NoteMDEditor
                        pubSubQueue={this.props.pubSubQueue}
                        note={note}
                    />
                </section>
            );
        } else {
            return (
                <section className="note-editor-container">
                    <Callout
                        title="No note selected"
                        className="no-note-selected"
                    >
                        Please choose a note on the left side to proceed.
                    </Callout>
                </section>
            );
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.contentId !== this.props.contentId) {
            const note = this.api.getNote(this.props.contentId);
            this.setState({
                note: note
            });
        }
    }

    onChange = attribute => data => {
        const note = this.state.note;
        note[attribute] = data;
        this.setState({
            note: note
        });
    };
}

export default NoteEditor;
