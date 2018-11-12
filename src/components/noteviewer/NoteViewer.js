import React, { Component } from "react";
import showdown from "showdown";
import PubSub from "pubsub-js";

class NoteViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
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
        const parsedContent = this.converter.makeHtml(
            note === null ? "" : note.content
        );
        return (
            <section
                className="note-viewer"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
        );
    }
}

export default NoteViewer;
