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

export async function writeData() { const data = await fetch(`http://localhost:3000/api/persons/10`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({username:'new', password:'984', title: "sdf5", description: "fdsg"}) // body data type must match "Content-Type" header
  });
  const message = await data.json();
  console.log(message);
}