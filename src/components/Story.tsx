import Image from "next/image"
import Avatar1 from "../assets/images/avatar 1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleLeft, faChevronCircleRight, faDirections, faHome } from "@fortawesome/free-solid-svg-icons"

function Story() {
  return (
    <div className="mt-5 flex flex-row gap-6 ml-20 w-">
        <div>
        {/* use remote image */}
        <img src="https://website.cdn.speechify.com/2023_10_ToonMe-Logo.png?quality=80&width=1080" className="w-14 h-14 rounded-[50%]" alt="image" />
        <p className="text-sm truncate w-14">Tessy_250</p>
        </div>
        <div>
        {/* use import as react js */}
        <Image src={Avatar1} className="w-40 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Kevin de.</p>
        </div>
        <div>
        {/* you can use public folder  */}
        <Image src="/images/aimefils.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Aime fils</p>
        </div>
        <div>
        {/* you can use public folder  */}
        <Image src="/images/elysee.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Mukunzi elyse djfkfiofflfk</p>
        </div>
        <div>
        {/* you can use public folder  */}
        <Image src="/images/enock.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Enockdus80</p>
        </div>
        <div>
        {/* you can use public folder  */}
        <Image src="/images/portfolio.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Odegaard_dan</p>
        </div>
        <div>
        {/* you can use public folder  */}
        <Image src="/images/avatar 3.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Irene_rw</p>
        </div>
        <div>
        {/* you can use public folder  */}
        <Image src="/images/avatar 2.jpg" width={50} height={40} className="w-14 h-14 rounded-[50%]" alt="avatar 1"/>
        <p className="text-sm truncate w-14">Peter_couch</p>
        </div>
        <div>
        <FontAwesomeIcon className="text-gray-400 mt-5 w-6 h-6" icon={faChevronCircleRight} />
        </div>
    </div>
  )
}

export default Story