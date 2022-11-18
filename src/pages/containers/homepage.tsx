import Link from "next/link";

export function homepage() {
  return (
  <div>
    <h2><Link href="/List">List</Link></h2>
    <h2><Link href="/idk">Database</Link></h2>
  </div>
  );
}
