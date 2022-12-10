import Link from "next/link";

export default function http_req(){
  return(
    <div>
      <pre>
        1. .../api/[table]/[id]
        <br />  [table] - select table (persons)
        <br />  [id] - element id
        <br />  GET - returns all data abut the element {'{[prop]: [data], ...} || {message: "element does not exist"}'}
        <br />  PUT - rewrites element based on JSON body {'{username?: string, password?: string, title?: string, description?: string}'}; returns status {'{message: "success"} || {message: "element does not exist"}'}
        <br />  DELETE - deletes element, returns status {'{message: "success"} - even if it doesn\'t exist || {message: "error"}'}
      </pre>
      <br />
      <pre>
        2. .../api/[table]
        <br />  [table] - select table (persons)
        <br />  POST - adds new element based on JSON body {"{username?: string, password?: string, title?: string, description?: string}"}; returns status {'{stmt: {}, lastID: int, changes: int} || {message: "error"}'}
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