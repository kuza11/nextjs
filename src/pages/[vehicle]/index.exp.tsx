import { NextPageContext } from "next";
import Link from "next/link";
import { obj } from "../../../api/obj";

export interface personProps {
  ownersList?: obj[];
}

export default function db({ ownersList }: personProps) {
  return (
    <div>
      <pre>{JSON.stringify(ownersList, null, 2)}</pre>
      <Link href="/">Back</Link>
    </div>
  );
}

export async function getServerSideProps({ query }: url) {
  const response = await fetch("http://localhost:4001/vehicles");
  const ownersList: obj[] | undefined = await response.json();
  return {
    props: { ownersList },
  };
}

export interface url extends NextPageContext {
  query: {
    vehicle: string;
    person: string;
  };
}
