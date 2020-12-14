const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db/shop.json");
const db = low(adapter);

// set upp the db
//db.defaults({ events: [], stuff: [], tickets: [] }).write();

module.exports = { db };
