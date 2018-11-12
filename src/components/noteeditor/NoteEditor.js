import React, { Component } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/darcula.css";
import PubSub from "pubsub-js";
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
        this.api.updateNote(this.props.contentId, newValue);
        PubSub.publish(this.props.pubSubQueue, newValue);
    };
}

export default NoteEditor;
