import Link from "next/link";

export default function http_req(){
  return(
    <div>
      <pre>
        1. .../api/[table]/[id]
        <br />  [table] - select table (person)
        <br />  [id] - element id
        <br />  GET - returns all data abut the element {"{[prop]: string, ...}"}
        <br />  PUT - rewrites element based on url address {"{[prop]: string, ...}"}
        <br />  POST - adds new element based on url address {"{[prop]: string, ...}"}
        <br />  DELETE - deletes element based on url address
      </pre>
      <Link href="/">Back</Link>
    </div>
  );
}