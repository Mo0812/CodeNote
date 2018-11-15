import DBConnector from "./DBConnector";

const shortid = window.require("shortid");

class API {
    constructor() {
        this.db = DBConnector.getInstance();
    }

    getNotes() {
        return this.db.get("notes").value();
    }

    hasNote(id) {
        return typeof this.getNote(id) !== "undefined";
    }

    getNote(id) {
        return this.db
            .get("notes")
            .find({ id: id })
            .value();
    }

    updateNote(note, content) {
        this.db
            .get("notes")
            .find({ id: note.id })
            .assign({
                content: content
            })
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

    removeNote(id) {
        this.db
            .get("notes")
            .remove({ id: id })
            .write();
    }

    updateSettings(name, value, domain = "settings") {
        this.db
            .get(domain)
            .assign({ [name]: value })
            .write();
    }

    getSettings(name, domain = "settings") {
        return this.db
            .get(domain)
            .get(name)
            .value();
    }

    emptySettings(name, domain = "settings") {
        return this.db
            .get(domain)
            .unset(name)
            .write();
    }
}

export default API;
