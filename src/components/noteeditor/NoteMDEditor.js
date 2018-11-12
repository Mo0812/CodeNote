import React, { Component } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/darcula.css";
import PubSub from "pubsub-js";
import API from "../../api/API";

class NoteMDEditor extends Component {
    constructor(props) {
        super(props);
        this.api = new API();
    }

    render() {
        return (
            <section className="note-md-editor">
                <textarea id="edit-area" />
            </section>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        this.setContent();
    }

    componentDidMount() {
        const textarea = document.querySelector("#edit-area");
        this.mdEditor = CodeMirror.fromTextArea(textarea, {
            mode: "markdown",
            theme: "darcula"
        });

        this.setContent();

        this.mdEditor.on("change", editor => {
            const newValue = editor.getValue();
            this.changeContent(newValue);
        });
    }

    setContent() {
        const note = this.props.note;
        if (note !== null) {
            this.mdEditor.setValue(note.content);
            PubSub.publish(this.props.pubSubQueue, note);
        }
    }

    changeContent = newValue => {
        const note = this.props.note;
        if (note !== null) {
            this.api.updateNote(note, newValue);
            PubSub.publish(this.props.pubSubQueue, note);
        }
    };
}

export default NoteMDEditor;
