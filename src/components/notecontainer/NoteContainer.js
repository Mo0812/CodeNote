import React, { Component } from "react";
import NoteList from "../notelist/NoteList";
import NoteEditor from "../noteeditor/NoteEditor";
import NoteViewer from "../noteviewer/NoteViewer";
import API from "../../api/API";

import * as Global from "../../constants";
import "./NoteContainer.scss";

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: null
        };
        this.api = new API();
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

    componentDidMount() {
        const lastId = this.api.getSettings("lastOpenNote", "user_settings");
        const id = typeof lastId === "undefined" ? null : lastId;
        this.setState({
            openNote: id
        });
    }

    openNote = id => {
        if (this.api.hasNote(id)) {
            this.api.updateSettings("lastOpenNote", id, "user_settings");
            this.setState({
                openNote: id
            });
        } else {
            this.api.emptySettings("lastOpenNote", "user_settings");
            this.setState({
                openNote: null
            });
        }
    };
}

export default NoteContainer;
