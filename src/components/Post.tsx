import { faBookmark, faComment, faEllipsis, faHeart, faSave, faShare, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

function Post() {
    return (
        <section className="ml-36">
            <div>
                {/* div for single post */}
                <div className="flex gap-[250px]">
                    <div className="flex gap-2">
                        {/* you can use public folder  */}
                        <Image src="/images/portfolio.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1" />
                        <p className="text-sm mt-5 font-bold">Odegaard_dan</p>
                        <p className="text-sm mt-5">1d</p>
                    </div>
                    <div className="flex gap-5">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400 w-10" />
                        <FontAwesomeIcon icon={faEllipsis} className="text-gray-400" />
                    </div>
                </div>
                <div>
                    <img src="https://i.ytimg.com/vi/ZzjrcW3QD8Y/maxresdefault.jpg" alt="post1" width={50} height={40} className="mt-5 w-[470px] h-[500px]" />
                </div>
                <div className="mt-5 flex flex-row gap-[320px]">
                    <main className="flex flex-row gap-5">
                        <FontAwesomeIcon icon={faHeart} className="w-6 text-gray-900" />
                        <FontAwesomeIcon icon={faComment} className="w-6 text-gray-900" />
                        <FontAwesomeIcon icon={faShare} className="w-6 text-gray-900" />
                    </main>
                    <main>
                    <FontAwesomeIcon icon={faBookmark} className="w-5 text-gray-900"/>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default Post