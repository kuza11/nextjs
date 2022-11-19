import Link from "next/link";

export function homepage() {

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

export async function writeData() { await fetch(`http://localhost:3000/api/person/2`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({username:'new', email:'new@new.com', password: '951', table: 'person'}) // body data type must match "Content-Type" header
  });
}