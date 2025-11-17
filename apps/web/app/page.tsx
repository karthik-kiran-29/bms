import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";

export default async function Home() {
  const data = {id:1,username:"karthik"}
  return (
    <div >
      {data?.id}
      {data?.username}
    </div>
  );
}
