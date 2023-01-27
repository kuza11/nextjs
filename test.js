const fetch = require("node-fetch");
/*const sqlite3 = require("sqlite3");
const {open} = require("sqlite");
const defValues = require("./config.json");

async function test1() {
  const db = await openDB();
  let cmplt = [];
  let logsArr = await db.all(`SELECT logs.id, logs.name, logs.description, logs.time, logs.date, logs.persons_id, persons.username, languages.name as lang_name from logs INNER JOIN languages on logs.languages_id=languages.id INNER JOIN persons on logs.persons_id=persons.id WHERE persons.id = ?;`, [1]);
  for (let i = 0; i < logsArr.length; i++) {
    cmplt.push({log: logsArr[i], tags: await db.all(`SELECT tags.id, tags.name, tags.description, tags.color FROM tags_assignment INNER JOIN tags on tags.id=tags_assignment.tags_id WHERE tags_assignment.logs_id = ?;`, [logsArr[i].id])});
    
  }
  console.log(JSON.stringify(cmplt, null, 2));
}

async function test2(){
  const db = await openDB();
  console.log(await db.run(`INSERT INTO tags (name, color, description) VALUES ("a","a","a"),("b","b","b"),("c","c","c");`))
}

function test3(){
  let a = 1;
  let b = 1;
  return{a,b};
}

a = test1();
console.log(a);

//test1();
//test2();

async function openDB() {
  return open({
    filename: "./" + defValues.databaseName,
    driver: sqlite3.Database,
  });
}
*/
/*

[
  [
  {},
  [{}]
  ]
]

*/

//fetch(`http://localhost:3000/api/persons/1`, {mode: "no-cors"}).then((res) => {console.log(res)})

let a = "hgfd";
let b = [1,2,3,4];

console.log(`gfgds ${b ? "abc " + b.map((e) => "?").toString().replaceAll(',', ' OR ') + " cba" : ""} `);
console.log(b.forEach((e) => {return "a"}))