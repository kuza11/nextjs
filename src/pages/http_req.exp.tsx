import Link from "next/link";

export default function http_req(){
  return(
    <div>
      <pre>
        1. .../api/persons/[id]
        <br />  [id] - element id
        <br />  GET - returns all data abut the element {'{[prop]: [data] | null, ...} || {message: "element does not exist"}'}
        <br />  PUT - rewrites element based on JSON body {'{username?: string, password?: string, title?: string, description?: string}'}; returns status {'{message: "success"} || {message: "element does not exist"} || {message: "error}'}
        <br />  DELETE - deletes element, returns status {'{message: "success"} - even if it doesn\'t exist || {message: "error"}'}
      </pre>
      <br />
      <pre>
        2. .../api/persons
        <br />  POST - adds new element based on JSON body {"{username?: string, password?: string, title?: string, description?: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {message: "error"}'}
      </pre>
      <br />
      <pre>
        3. .../api/languages
        <br />  POST - adds new element based on JSON body {"{name: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {message: "error"}'}
        <br />  GET - returns all data abut all elements {'[{id: int, name: string}, {...}, ...] - array of objects || {message: "element does not exist"}'}
      </pre>
      <br />
      <pre>
        4. .../api/tags/[id]
        <br />  GET - returns all data abut the element {'{[prop]: [data] | null, ...} || {message: "element does not exist"}'}
        <br />  PUT - rewrites element based on JSON body {'{name?: string, color?: string, description?: string}'}; returns status {'{message: "success"} || {message: "element does not exist"} || {message: "error}'}
      </pre>
      <br />
      <pre>
        5. .../api/tags
        <br />  GET - returns all data abut all elements {'[{id: int, name: string | null , color: string}, {...}, ...] - array of objects || {message: "element does not exist"}'}
        <br />  POST - adds new element based on JSON body {"{name: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {message: "error"}'}
      </pre>
      <br />
      <pre>
        6. .../api/logs/[id]
        <br/> 
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