import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { obj } from "../../../api/obj";

export interface personProps {
  ownersList?: obj[];
}

export default function person({ ownersList }: personProps) {
  const router = useRouter();
  return (
    <div>
      <pre>{ownersList?.[0]?.details}</pre>
      <p><Link href="/list">Back</Link></p>
    </div>
  );
}

export async function getServerSideProps({ query }: url) {
  const response = await fetch(
    "http://localhost:4001/vehicles?name=" +
      query.person +
      "&vehicle=" +
      query.vehicle
  );
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
