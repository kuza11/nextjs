import Link from "next/link";
import { obj } from "../../api/obj";

export interface listProps {
  ownersList?: obj[];
}

export default function List({ ownersList }: listProps) {
  return (
    <div>
      {ownersList?.map((e, index) => (
        <div key={index}>
          <Link href={`/${e.vehicle}/${e.name}`}>
            {e.name}'s {e.vehicle}
          </Link>
        </div>
      ))}
      <p>
        <Link href="/">Back</Link>
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4001/vehicles");
  const ownersList: obj[] | undefined = await response.json();
  return {
    props: { ownersList },
  };
}
