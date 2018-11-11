import React, { Component } from "react";
import NoteList from "../notelist/NoteList";
import NoteEditor from "../noteeditor/NoteEditor";
import NoteViewer from "../noteviewer/NoteViewer";
import "./NoteContainer.css";

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorContent: ""
        };
    }

    render() {
        return (
            <section className="note-container">
                <NoteList />
                <NoteEditor onChange={this.editorChange} />
                <NoteViewer content={this.state.editorContent} />
            </section>
        );
    }

    editorChange = content => {
        console.log(content);
        this.setState({
            editorContent: content
        });
    };
}

export default NoteContainer;
