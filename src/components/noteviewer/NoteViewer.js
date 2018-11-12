import React, { Component } from "react";
import showdown from "showdown";
import PubSub from "pubsub-js";

class NoteViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawContent: null
        };
        this.converter = new showdown.Converter();
    }

    componentDidMount() {
        this.token = PubSub.subscribe(this.props.pubSubQueue, (msg, data) => {
            this.setState({
                rawContent: data
            });
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const rawContent = this.state.rawContent;
        const parsedContent = this.converter.makeHtml(
            rawContent === null ? "" : rawContent
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
