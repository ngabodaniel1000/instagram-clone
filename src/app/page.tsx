import Image from "next/image";
import Photo from "../code-to-image-converter.png"

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-300">Hello kagabo</h1>
      {/* <Image src={Photo} alt="Code image" width={100} height={200}/> */}
      <a href="/about">About</a>
    </div>
  );
}
