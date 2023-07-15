import Navbar from "../components/Navbar";
import Footter from "../components/Footter";
import AsideLeft from "../components/AsideLeft";
import CardPost from "../components/CardPost";
import {Props as ContentInfo} from "../components/CardPost"
import AsideRight from "../components/AsideRight";

const cards:ContentInfo [] = [
    {
        cardImg: 'https://res.cloudinary.com/practicaldev/image/fetch/s--F8vXLM34--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8i3shhdfjhswxr3dmfyb.jpeg',
        userName: 'Mitchell Mutandah',
        userImg:'https://res.cloudinary.com/practicaldev/image/fetch/s--UdYvUw26--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766802/f995f1c4-5812-4a16-8382-3c38f2208269.jpeg',
        cardTitle: "Is the AI Hype Over? OpenAI's ChatGPT Code Interpreter Takes Center Stage",
        date: new Date,
        tags: [
            'devto',
            'devto',
            'devto',
        ],
        comments: 5,
        reactions: 10,
        timeToRead: 25,
    },
    {
        cardImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzvwxIDcguFqEhJTwYvnJ2kts6U0viAjU6bUV-PsRKjEhTu3pdDRheUOdOR2_pD8e38o&usqp=CAU',
        userName: 'Mitchell Mutandah',
        userImg:'https://res.cloudinary.com/practicaldev/image/fetch/s--UdYvUw26--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766802/f995f1c4-5812-4a16-8382-3c38f2208269.jpeg',
        cardTitle: "Is the AI Hype Over? OpenAI's ChatGPT Code Interpreter Takes Center Stage",
        date: new Date,
        tags: [
            'devto',
            'devto',
            'devto',
        ],
        comments: 5,
        reactions: 10,
        timeToRead: 25,
    },
    {
        cardImg: 'https://www.shutterstock.com/shutterstock/photos/1862937556/display_1500/stock-photo-triangle-solid-black-golden-illustration-abstract-hd-download-1862937556.jpg',
        userName: 'Mitchell Mutandah',
        userImg:'https://res.cloudinary.com/practicaldev/image/fetch/s--UdYvUw26--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766802/f995f1c4-5812-4a16-8382-3c38f2208269.jpeg',
        cardTitle: "Is the AI Hype Over? OpenAI's ChatGPT Code Interpreter Takes Center Stage",
        date: new Date,
        tags: [
            'devto',
            'devto',
            'devto',
        ],
        comments: 5,
        reactions: 10,
        timeToRead: 25,
    },
    {
        cardImg: 'https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg',
        userName: 'Mitchell Mutandah',
        userImg:'https://res.cloudinary.com/practicaldev/image/fetch/s--UdYvUw26--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766802/f995f1c4-5812-4a16-8382-3c38f2208269.jpeg',
        cardTitle: "Is the AI Hype Over? OpenAI's ChatGPT Code Interpreter Takes Center Stage",
        date: new Date,
        tags: [
            'devto',
            'devto',
            'devto',
        ],
        comments: 5,
        reactions: 10,
        timeToRead: 25,
    },
    {
        cardImg: '',
        userName: 'Mitchell Mutandah',
        userImg:'https://res.cloudinary.com/practicaldev/image/fetch/s--UdYvUw26--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/766802/f995f1c4-5812-4a16-8382-3c38f2208269.jpeg',
        cardTitle: "Is the AI Hype Over? OpenAI's ChatGPT Code Interpreter Takes Center Stage",
        date: new Date,
        tags: [
            'devto',
            'devto',
            'devto',
        ],
        comments: 5,
        reactions: 10,
        timeToRead: 25,
    },
]
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full flex gap-4 p-4">
        <aside className="hidden md:block w-0 md:w-1/4">
          <AsideLeft />
        </aside>
        <section className="w-full md:w-3/4 lg:w-1/2">
          <nav className="flex justify-between">
            <ul className="flex flex-nowrap py-1">
              <a className="py-2 px-4 text-[18px] text-[#121212] font-bold cursor-pointer" href="">Relevant</a>
              <a className="py-2 px-4 text-[18px] text-[#575757] cursor-pointer" href="">Latest</a>
              <a className="py-2 px-4 text-[18px] text-[#575757] cursor-pointer" href="">Top</a>
            </ul>
          </nav>
            {
                cards.map((card,index) => {
                    return (
                        <CardPost
                        key={`card-${index}`}
                        cardImg={card.cardImg}
                        userName={card.userName}
                        userImg={card.userImg}
                        date={card.date}
                        cardTitle={card.cardTitle}
                        comments={card.comments}
                        reactions={card.comments}
                        tags={card.tags}
                        timeToRead={card.timeToRead}
                        />
                    )
                })
            }
        </section>
        <aside className="hidden lg:block w-0 lg:w-1/4">
         <AsideRight />
        </aside>
      </main>
      <Footter />
    </>
  );
}
