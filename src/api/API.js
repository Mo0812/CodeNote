import DBConnector from "./DBConnector";
class API {
    constructor() {
        const dbConnector = new DBConnector();
        this.db = dbConnector.getInstance();
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
}

export default API;
