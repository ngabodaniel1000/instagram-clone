"use client"
import Image from "next/image";
import { useState } from "react";
import Avatar1 from "../assets/images/avatar 1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

function Story() {
  // Define the initial state with an array of story objects
  const [stories, setStories] = useState([
    { id: 1, imgSrc: "https://website.cdn.speechify.com/2023_10_ToonMe-Logo.png?quality=80&width=1080", name: "Tessy_250" },
    { id: 2, imgSrc: Avatar1, name: "Kevin de." },
    { id: 3, imgSrc: "/images/aimefils.jpg", name: "Aime fils" },
    { id: 4, imgSrc: "/images/elysee.jpg", name: "Mukunzi elyse djfkfiofflfk" },
    { id: 5, imgSrc: "/images/enock.jpg", name: "Enockdus80" },
    { id: 6, imgSrc: "/images/portfolio.jpg", name: "Odegaard_dan" },
    { id: 7, imgSrc: "/images/avatar 3.jpg", name: "Irene_rw" },
    { id: 8, imgSrc: "/images/avatar 2.jpg", name: "Peter_couch" },
  ]);

  return (
    <div className="mt-5 flex flex-row gap-6 ml-20">
      {stories.map((story) => (
        <div key={story.id}>
          {/* Use Image component for local images and img tag for remote images */}
          {typeof story.imgSrc === "string" && story.imgSrc.startsWith("http") ? (
            <img src={story.imgSrc} className="w-14 h-14 rounded-[50%]" alt="image" />
          ) : (
            <Image src={story.imgSrc} width={50} height={40} className="w-14 h-14 rounded-[50%]" alt={story.name} />
          )}
          <p className="text-sm truncate w-14">{story.name}</p>
        </div>
      ))}
      <div>
        <FontAwesomeIcon className="text-gray-400 mt-5 w-6 h-6" icon={faChevronCircleRight} />
      </div>
    </div>
  );
}

export default Story;