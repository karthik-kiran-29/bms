import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import  client  from "@repo/db/client";

const prisma = new client.PrismaClient();

export default async function Home() {
  const data = await prisma.user.findFirst();
  return (
    <div >
      {data?.id}
      {data?.username}
    </div>
  );
}
