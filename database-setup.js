const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const defValues = require("./config.json");

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDB();
  await db.migrate({ force: "last" });

  const people = await db.all("SELECT * from persons");
  console.log("ALL PEOPLE", JSON.stringify(people, null, 2));

}

setup();
