const low = window.require("lowdb");
const FileSync = window.require("lowdb/adapters/FileSync");
const shortid = window.require("shortid");
const cryptojs = window.require("crypto-js");

class DBConnector {
    constructor() {
        const adapter = new FileSync(
            "db.json" /*{
            serialize: data => this.encrypt(JSON.stringify(data)),
            deserialize: data => JSON.parse(this.decrypt(data))
        }*/
        );
        this.db = low(adapter);
        this.db
            .defaults({
                notes: [
                    {
                        id: shortid.generate(),
                        title: "Notiz 1",
                        content:
                            "# Test 1\nLorem ipsum dolor sit amet\n*consetetur sadipscing\n*elitr, sed diam nonumy\n*eirmod tempor invidunt\nut labore et dolore\nmagna aliquyam erat\n**sed diam voluptua.**"
                    },
                    {
                        id: shortid.generate(),
                        title: "Notiz 2",
                        content:
                            "# Test 2\nLorem ipsum dolor sit amet\n*consetetur sadipscing\n*elitr, sed diam nonumy\n*eirmod tempor invidunt\nut labore et dolore\nmagna aliquyam erat\n**sed diam voluptua.**"
                    },
                    {
                        id: shortid.generate(),
                        title: "Notiz 3",
                        content:
                            "# Test 3\nLorem ipsum dolor sit amet\n*consetetur sadipscing\n*elitr, sed diam nonumy\n*eirmod tempor invidunt\nut labore et dolore\nmagna aliquyam erat\n**sed diam voluptua.**"
                    }
                ],
                user: {},
                user_settings: {},
                settings: {}
            })
            .write();
    }

    encrypt(data) {
        return cryptojs.AES.encrypt(data, "1234").toString();
    }

    decrypt(data) {
        const bytes = cryptojs.AES.decrypt(data, "1234");
        return bytes.toString(cryptojs.enc.Utf8);
    }

    getInstance() {
        return this.db;
    }
}

const instance = new DBConnector();
Object.freeze(instance);

export default instance;
