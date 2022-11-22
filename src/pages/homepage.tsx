import Link from "next/link";

export function homepage() {
  writeData();
  return (
    <div>
      <h2>
        <Link href="/list">List</Link>
      </h2>
      <h2>
        <Link href="/idk">Database</Link>
      </h2>
      <h2>
        <Link href="/http_req">Http Request Links</Link>
      </h2>
    </div>
  );
}

export async function writeData() { await fetch(`http://localhost:3000/api/person/4`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    /*headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({username:'new', email:'new3@new3.com', password:'984'}) // body data type must match "Content-Type" header*/
  });
}