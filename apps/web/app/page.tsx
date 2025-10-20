import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {client} from "@repo/db/client"

export default async function Home() {
  const data = await client.user.findFirst();
  return (
    <div >
      {data?.id}
      {data?.username}
    </div>
  );
}
