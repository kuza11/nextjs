import Link from "next/link";

export default function http_req(){
  return(
    <div>
      <pre>
        1. .../api/[table]/[id]
        <br />  table - select table (person)
        <br />  id - element id
        <br />  GET - returns all data abut the element
        <br />  PUT - rewrites {"{[prop]: string, ...}"}
      </pre>
      <Link href="/">Back</Link>
    </div>
  );
}