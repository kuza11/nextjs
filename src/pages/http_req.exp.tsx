import Link from "next/link";

export default function http_req(){
  return(
    <div>
      <pre>
        1. .../api/persons/[id]
        <br />  [id] - element id
        <br />  GET - returns all data about the element {'{username: string, password: string, title: string, description: string} || {message: "element does not exist"}'}
        <br />  PUT - rewrites element based on JSON body {'{username?: string, password?: string, title?: string, description?: string}'}; returns status {'{message: "success"} || {message: "element does not exist"} || {message: "error}'}
        <br />  DELETE - deletes element, returns status {'{message: "success"} - even if it doesn\'t exist || {message: "error"}'}
      </pre>
      <br />
      <pre>
        2. .../api/persons
        <br />  POST - adds new element based on JSON body {"{username?: string, password?: string, title?: string, description?: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {error: error, message: "Probably wrong data in body"} || {message: "error"}'}
      </pre>
      <br />
      <pre>
        3. .../api/languages
        <br />  POST - adds new element based on JSON body {"{name: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {error: error, message: "Probably wrong data in body} || {message: "error"}'}
        <br />  GET - returns all data about all elements {'[{id: int, name: string}, {...}, ...] - array of objects || {error: error, message: "Probably wrong data in body"} || {message: "element does not exist"}'}
      </pre>
      <br />
      <pre>
        4. .../api/tags/[id]
        <br />  GET - returns all data about the element {'{[prop]: [data] | null, ...} || {error: error, message: "Probably wrong data in body"} || {message: "element does not exist"}'}
        <br />  PUT - rewrites element based on JSON body {'{name?: string, color?: string, description?: string}'}; returns status {'{message: "success"} || {message: "element does not exist"} || {error: error, message: "Probably wrong data in body"} || {message: "error}'}
      </pre>
      <br />
      <pre>
        5. .../api/tags
        <br />  GET - returns all data about all elements {'[{id: int, name: string | null , color: string}, {...}, ...] - array of objects || {error: error, message: "Probably wrong data in body"} || {message: "element does not exist"}'}
        <br />  POST - adds new element based on JSON body {"{name?: string, description?: string, color?: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {error: error, message: "Probably wrong data in body"} || {message: "error"}'}
      </pre>
      <br />
      <pre>
        6. .../api/persons/logs/[id] ||
        <br/>   .../api/persons/logs/[id]?sort=[time || rating || date] ||
        <br/>   .../api/persons/logs/[id]?sort=[time || rating || date]&order=[asc || desc]
        <br/>  GET - returns all logs based on persons id and all their tags {'[{log: {id: int, name: string, description: string, time: real, date: int, rating: int, persons_id: int, username: string, lang_name: string}, tags: [{id: int, name: string, description: string, color: string}]}] || {message: "element does not exist"} || {error: error, message: "Probably wrong data in body"} || {message: "error"}'}
        <br/>  POST - adds new element based on persons id and JSON body {"{name?: string, description?: string, time?: real, date?: int, language?: string, rating?: int, tags?: [{name: string, description: string, color: string,}], tags_id?: [int]}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {error: error, message: "Probably wrong data in body"} || {message: "error"}'}
      </pre>
      <br />
      <br />
      <pre>
        example:
        <br />  export async function writeData() { "{ const data = await fetch(`http://localhost:3000/api/persons`, {"}
        <br />      method: 'POST', // *GET, POST, PUT, DELETE, etc.
        <br />      headers: {"{"}
        <br />        'Content-Type': 'application/json'
        <br />      {"}"},
        <br />     body: JSON.stringify({'{username:"new", password:"984", title: "sdf", description: "sgfvds"}'}) // body data type must match "Content-Type" header
        <br />    {"}"});
        <br />    const message = await data.json();
        <br />    console.log(message)
        <br />  {"}"}
      </pre>
      <Link href="/">Back</Link>
    </div>
  );
}