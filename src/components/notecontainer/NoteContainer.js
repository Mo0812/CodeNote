import React, { Component } from "react";
import NoteList from "../notelist/NoteList";
import NoteEditor from "../noteeditor/NoteEditor";
import NoteViewer from "../noteviewer/NoteViewer";

import * as Global from "../../constants";
import "./NoteContainer.scss";

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: null
        };
    }

    render() {
        return (
            <section className="note-container">
                <NoteList
                    pubSubQueue={Global.MARKDOWN_CHANGE_QUEUE}
                    activeId={this.state.openNote}
                    onOpenNote={id => this.openNote(id)}
                />
                {(this.props.viewMode === Global.CODE_PREVIEW_VIEW ||
                    this.props.viewMode === Global.CODE_VIEW) && (
                    <NoteEditor
                        pubSubQueue={Global.MARKDOWN_CHANGE_QUEUE}
                        contentId={this.state.openNote}
                        viewMode={this.props.viewMode}
                    />
                )}
                {(this.props.viewMode === Global.CODE_PREVIEW_VIEW ||
                    this.props.viewMode === Global.PREVIEW_VIEW) && (
                    <NoteViewer pubSubQueue={Global.MARKDOWN_CHANGE_QUEUE} />
                )}
            </section>
        );
    }

    openNote = id => {
        this.setState({
            openNote: id
        });
    };
}

export default NoteContainer;
