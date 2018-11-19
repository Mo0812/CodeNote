import React, { Component } from "react";
import showdown from "showdown";
import PubSub from "pubsub-js";
import { H1 } from "@blueprintjs/core";

import "./NoteViewer.scss";
import "github-markdown-css/github-markdown.css";

class NoteViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
        showdown.setFlavor("github");
        showdown.setOption("emoji", true);
        showdown.setOption("tasklists", true);
        showdown.setOption("smoothLivePreview", true);
        showdown.setOption("ghCodeBlocks", true);
        showdown.setOption("tables", true);
        showdown.setOption("strikethrough", true);

        this.converter = new showdown.Converter();
    }

    componentDidMount() {
        this.token = PubSub.subscribe(this.props.pubSubQueue, (msg, data) => {
            this.setState({
                note: data
            });
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const note = this.state.note;
        if (note !== null && typeof note !== "undefined") {
            return (
                <section className="note-viewer-container">
                    <div className="note-viewer-title">
                        <H1>{note.title}</H1>
                    </div>
                    <section
                        className="note-viewer markdown-body"
                        dangerouslySetInnerHTML={{
                            __html: this.converter.makeHtml(note.content)
                        }}
                    />
                </section>
            );
        } else {
            return <section className="note-viewer-container" />;
        }
    }
}

export default NoteViewer;
