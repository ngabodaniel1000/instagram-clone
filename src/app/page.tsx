import Image from "next/image";
import Photo from "../code-to-image-converter.png"
import Story from "@/components/Story";
import Post from "@/components/Post";
import Followersuggestion from "@/components/Followersuggestion";

export default function Home() {
  return (
    <div className="ml-[300px] flex flex-col gap-10">
      <Story />
      <Post />

    </div>
  );
}
