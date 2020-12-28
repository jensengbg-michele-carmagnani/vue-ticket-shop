const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./db/shop.json");

const db = low(adapter);

module.exports = {
  async getUserName(user) {
    return await db.get("stuff").find({ username: user.username }).value();
  },
};
