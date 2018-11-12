import React, { Component } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/darcula.css";
import API from "../../api/API";

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.api = new API();
    }

    render() {
        return (
            <section className="note-editor">
                <textarea id="edit-area" />
            </section>
        );
    }

    componentDidUpdate() {
        const note = this.api.getNote(this.props.contentId);
        this.setContent(note);
    }

    componentDidMount() {
        const textarea = document.querySelector("#edit-area");
        this.mdEditor = CodeMirror.fromTextArea(textarea, {
            mode: "markdown",
            theme: "darcula"
        });

        this.mdEditor.on("change", editor => {
            const newValue = editor.getValue();
            this.changeContent(newValue);
        });
    }

    setContent(note) {
        if (typeof note !== "undefined") {
            this.setContentFlag = true;
            this.mdEditor.setValue(note.content);
        }
    }

    changeContent = newValue => {
        console.log(this.props.contentId);
        this.api.updateNote(this.props.contentId, newValue);
    };
}

export default NoteEditor;
