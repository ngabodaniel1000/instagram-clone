"use client"
import { useState } from "react";
import { faBookmark, faComment, faEllipsis, faHeart, faSave, faShare, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { comment } from "postcss";
import { log } from "console";
import Followersuggestion from "./Followersuggestion";

function Post() {
    const [showcomment, Setshowcomment] = useState(false)
    const [newcomment, Setnewcomment] = useState("")
    // State to hold the posts
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: "Odegaard_dan",
            time: "1d",
            likes: 441,
            avatar: "/images/portfolio.jpg",
            image: "https://i.ytimg.com/vi/ZzjrcW3QD8Y/maxresdefault.jpg",
            showcommentsection: true,
            description: "Mikel Arteta says his team feel re-energised after managing to find solutions following Kai Havertz's injury.",
            comments: [{text:"good✅✅",img:"/images/portfolio.jpg"}, {text:"false news",img:"/images/avatar 2.jpg"},{text: "rumors",img:"/images/avatar 3.jpg"}, {text:"it will not work",img:"/images/mum.png"}]
        },
        {
            id: 2,
            username: "User2",
            time: "2d",
            likes: 111,
            avatar: "/images/avatar 2.jpg",
            image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WK2WfJuTJQm48APOtHj6pQ.png",
            description: "Clinical trials are underway for Telepathy, a Neuralink brain chip that could give people who are paralyzed the ability to use the mind to wirelessly control computers, smartphones and other electronic devices",
            comments: [{text:"interesting🎱🎱",img:"/images/aimefils.jpg"}, {text:"awesome",img:"/images/elysee.jpg"}, {text:"invention",img:"/images/avatar 2.jpg"},{text: "rumors",img:"/images/avatar 3.jpg"},{ img:"/images/avatar 3.jpg",text:"🥺🥺🥺🥺🥺"},{img:"/images/portfolio.jpg",text:"it will not work"}]
        },
        {
            id: 3,
            username: "User3",
            time: "3d",
            likes: 12,
            avatar: "/images/avatar 3.jpg",
            image: "https://media.istockphoto.com/id/597959356/photo/female-teacher-addressing-university-students-in-a-classroom.jpg?s=612x612&w=0&k=20&c=SCXcpy72KRZUj7n60xnzaRAPYBhwP3YCbRl2uiBWIrA=",
            description: "A researcher who studies ways to help students become better readers and writers describes how to create a homework habit using a loop: cue, routine, reward.",
            comments: [{text:"good✅✅",img:"/images/portfolio.jpg"}, {text:"false news",img:"/images/avatar 2.jpg"},{text: "rumors",img:"/images/avatar 3.jpg"}, {text:"it will not work",img:"/images/mum.png"}]
        },
        {
            id: 4,
            username: "User4",
            time: "4d",
            likes: 134,
            avatar: "/images/mum.png",
            image: "https://picsum.photos/500/502",
            description: "@Mr.Phenomenalpower thank you for sharing this moment with the world.",
            comments: [{text:"good✅✅",img:"/images/portfolio.jpg"}, {text:"false news",img:"/images/avatar 2.jpg"},{text: "rumors",img:"/images/avatar 3.jpg"}, {text:"it will not work",img:"/images/mum.png"}]


        },
        {
            id: 5,
            username: "User5",
            time: "5d",
            likes: 11,
            avatar: "/images/aimefils.jpg",
            image: "https://media.istockphoto.com/id/1226029166/photo/fruts-vegetables-at-market-india.jpg?s=612x612&w=0&k=20&c=2zOAPF32PTDonIvCUA1PyBhXQ1X0UcKDmQKtknz_sAA=",
            description: "The first 2025 meeting of the FAEP System's Horticulture Technical Committee (CT) focused on the certification of fruits, vegetables,...",
            comments: [{text:"good✅✅",img:"/images/portfolio.jpg"}, {text:"false news",img:"/images/avatar 2.jpg"},{text: "rumors",img:"/images/avatar 3.jpg"}, {text:"it will not work",img:"/images/mum.png"}]

        },
    ]);

    return (
        <div className="flex gap-40">

        <section className="ml-36">
            {/* Map over the posts array */}
            {posts.map((post) => (
                <div key={post.id} className="mb-10">
                    {/* Div for single post */}
                    <div className="flex gap-[250px]">
                        <div className="flex gap-2">
                            {/* Avatar */}
                            <Image src={post.avatar} width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar" />
                            <p className="text-sm mt-5 font-bold">{post.username}</p>
                            <p className="text-sm mt-5">{post.time}</p>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-10" />
                            <FontAwesomeIcon icon={faEllipsis} className="text-gray-400" />
                        </div>
                    </div>
                    {/* Post image */}
                    <div>
                        <img src={post.image} alt={`post-${post.id}`} width={50} height={40} className="mt-5 w-[470px] h-[500px]" />
                    </div>
                    {/* Post actions */}
                    <div className="mt-5 flex flex-row gap-[320px]">
                        <main className="flex flex-row gap-5">
                            <button onClick={() => {
                                post.likes += 1
                                setPosts([...posts])
                            }}><FontAwesomeIcon icon={faHeart} className="text-2xl text-gray-900" /></button>
                            <FontAwesomeIcon icon={faComment} className="text-2xl text-gray-900" />
                            <FontAwesomeIcon icon={faShare} className="text-2xl text-gray-900" />
                        </main>
                        <main>
                            <FontAwesomeIcon icon={faBookmark} className="text-2xl text-gray-900" />
                        </main>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex mt-5">
                            <img src="/images/aimefils.jpg" alt="aime" className="w-5 h-5 rounded-xl hover:w-6" />
                            <img src="/images/portfolio.JPG" alt="dan" className="w-5 h-5 rounded-xl hover:w-6" />
                            <img src="/images/enock.jpg" alt="nock" className="w-5 h-5 rounded-xl " />
                        </div>
                        <div className="">
                            <p className="text-sm mt-5">{post.likes} Likes</p></div>
                    </div>
                    <div>
                        <span className="font-bold">{post.username}</span> {post.description.length < 10 ? post.description.substring(0, 300) + "..." : post.description}
                    </div>
                    <div>
                        {post.showcommentsection ?
                            <div>

                                {post.comments.map((comments) =>
                                    <div className="flex mt-2 gap-5">
                                        <img src={comments.img} alt="image" className="w-5 h-5 rounded-xl"/>
                                        <p>{comments.text}</p>
                                    </div>
                                )}
                                <button onClick={() => { 
                                    post.showcommentsection = false
                                     setPosts([...post]) }} className="text-gray-600">Hide comments</button>
                            </div>
                            : <button onClick={() => { post.showcommentsection =true }} className="text-gray-600 mt-2">{`Show all ${post.comments.length} comments`}</button>}
                    </div>
                    <input type="text" onChange={(e)=>{
                        Setnewcomment(e.target.value)
                    }} className="w-[400px] bg-red-400 border-t-0 border-r-0 border-l-0 border-b-2 outline-none bg-transparent mt-5 border-gray-950" placeholder="Add comment" onKeyDown={(e)=>{
                       if (e.key === "Enter") {
                        post.comments.push({text:newcomment,img:""})
                        console.log(post.comments);
                        setPosts([...posts])
                        
                       }
                    }}/>
                </div>
            ))}
        </section>
            <Followersuggestion />
        </div>
    );
}

export default Post;