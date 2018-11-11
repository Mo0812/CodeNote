import React, { Component } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/darcula.css";

class NoteEditor extends Component {
    render() {
        return (
            <section className="note-editor">
                <textarea id="edit-area" />
            </section>
        );
    }

    componentDidMount() {
        const textarea = document.querySelector("#edit-area");
        const mdEditor = CodeMirror.fromTextArea(textarea, {
            mode: "markdown",
            theme: "darcula"
        });
        mdEditor.setValue(
            "# Test\n*lit*\n**fat**\n* Ein Test\n* Zwei Test\n\n1. Super\n1. Duper\n\n[Was geht](ab)"
        );
        mdEditor.on("change", editor => {
            const newValue = editor.getValue();
            this.props.onChange(newValue);
        });
    }
}

export default NoteEditor;
