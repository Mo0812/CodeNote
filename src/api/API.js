import DBConnector from "./DBConnector";

const shortid = window.require("shortid");

class API {
    constructor() {
        this.db = DBConnector.getInstance();
    }

    getNotes() {
        return this.db.get("notes").value();
    }

    getNote(id) {
        return this.db
            .get("notes")
            .find({ id: id })
            .value();
    }

    updateNote(id, content) {
        this.db
            .get("notes")
            .find({ id: id })
            .assign({ content: content })
            .write();
    }

    addNote() {
        const newId = shortid.generate();
        this.db
            .get("notes")
            .push({ id: newId, title: "New Note", content: "" })
            .write();

        return newId;
    }
}

export default API;
