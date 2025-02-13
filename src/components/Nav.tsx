import { faFacebookMessenger, faThreads } from "@fortawesome/free-brands-svg-icons"
import { faAdd, faBars, faBell, faChartBar, faCompass, faHeart, faHome, faMessage, faSearch, faUser, faVideo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Nav() {
  return (
    <div className="flex flex-col gap-10">
      <p className="mt-10 ml-4 text-3xl font-[cursive]">Instagram</p>
      <ul className="ml-4 flex flex-col gap-[30px]">
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faHome} /> <span className="text-lg mt-0">Home</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faSearch} /> <span className="text-lg mt-0">Search</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faCompass} /> <span className="text-lg mt-0">Explore</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faFacebookMessenger} /> <span className="text-lg mt-0">Messages</span> <span className="bg-red-500 text-[14px] text-center text-white rounded-[50%] w-4 h-[18px] font-bold absolute left-8">5</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faVideo} /> <span className="text-lg mt-0">Reels</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faHeart} /> <span className="text-lg mt-0">Notification</span><span className="bg-red-500 text-[14px] text-center rounded-[50%] w-2 h-[10px] font-bold absolute left-8"></span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faAdd} /> <span className="text-lg mt-0">Create</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faChartBar} /> <span className="text-lg mt-0">Dashboard</span></p></a></li>
        <li><a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faUser} /> <span className="text-lg mt-0">Profile</span></p></a></li> 
      </ul>
      <div className="ml-4 mt-6 flex flex-col gap-5">
        <a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faThreads}/><span className="text-lg mt-0">Threads</span><span className="bg-red-500 text-[14px] text-center text-white rounded-[50%] w-4 h-[18px] font-bold absolute left-[33px]">5</span></p></a>
        <a href="#"><p className="flex flex-row gap-4"><FontAwesomeIcon className="text-black w-6 h-6" icon={faBars}/><span className="text-lg mt-0">More</span></p></a>
      </div>
    </div>
  )
}

export default Nav