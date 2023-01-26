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

/*export async function writeData() { const data = await fetch(`http://localhost:3000/api/persons/logs/1`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({name : "ui", description : "yui", time : 40, date : 1514774740, language : "ruby", rating: 120, tags_id: [1,2]}) // body data type must match "Content-Type" header
  });
  const message = await data.json();
  console.log(message);
}*/
export async function writeData() { const data = await fetch(`http://localhost:3000/api/persons/1`, {mode: "no-cors"});
  const message = await data.json();
  console.log(message);
}