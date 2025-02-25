function Followersuggestion() {
    const data = [
        {
            username:"amani diope",
            img:"/images/aimefils.jpg",
            follower:"_Charles",
            followercount:19
        },
        {
            username:"Dusman_250",
            img:"/images/enock.jpg",
            follower:"_Petrdom",
            followercount:23
        },
        {
            username:"Chaban🏁",
            img:"/images/elysee.jpg",
            follower:"Kagabo_250",
            followercount:28
        },
        {
            username:"Justin kluivert",
            img:"/images/avatar 2.jpg",
            follower:"_Vinicius_jr",
            followercount:7
        },
        {
            username:"Mushiki wabo",
            img:"/images/avatar 3.jpg",
            follower:"_Irene",
            followercount:111
        },
    ]
  return (
    <div className="flex flex-col gap-5 absolute top-10 left-[75%]">
     <section className="flex gap-5">
     <img src="/images/pic.JPG" className="w-10 h-10 rounded-[50%]" alt="profile" />
        <div className="text-sm mr-10">
            <p className="font-bold">Odegaard_Daniel</p>
            <p>Ng_Daniel Odegaard</p>
        </div>
        <a href="#" className="text-blue-400 font-bold">Switch</a>
     </section>
     <section>
        <div className="flex gap-[117px]">
            <p className="text-gray-700">Suggested for you</p>
            <a href="#" className="font-bold">See All</a>
        </div>
        <div className="mt-5">
            {data.map((item)=>
            <div className="flex gap-3 mb-5">
                <img src={item.img} className="w-10 h-10 rounded-[50%]" alt={item.username+"img"} />
                <div>
                <p>{item.username}</p>
                <p className="text-sm text-gray-500">Followed by {item.follower} + {item.followercount} more</p>
                </div>
            </div>
            )}
        </div>
     </section>
    </div>
  )
}

export default Followersuggestion