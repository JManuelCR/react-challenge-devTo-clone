import Footter from "../components/Footter";
import Navbar from "../components/Navbar";
import heart from "../assets/icons/heart-like-aside.svg";
import commentIcon from "../assets/icons/comments-count-aside.svg";
import mark from "../assets/icons/save-No-Background-Icon-aside.svg";

export default function Post() {
  return (
    <>
      <Navbar />
      <main className="md:p-4 flex gap-3">
        <aside className="hidden md:block md:w-2/12 flex justify-center relative">
          <div className="max-w-[55px] flex flex-col justify-center sticky top-[119px]">
            <div>
              <button className="max-w-[40px]">
                <span className="p-2 block">
                  <img
                    className="h-[24px] w-[24px]"
                    src={heart}
                    alt="Heart reaction icon"
                  />
                </span>
                <span className="justify-center text-[14px]">4</span>
              </button>
              <div></div>
            </div>
            <button className="max-w-[40px]">
              <span className="p-2 block">
                <img
                  className="h-[24px] w-[24px]"
                  src={commentIcon}
                  alt="Comments icon reaction"
                />
              </span>
              <span className="justify-center text-[14px]">16</span>
            </button>
            <button className="max-w-[40px]">
              <span className="p-2 block">
                <img
                  className="h-[24px] w-[24px]"
                  src={mark}
                  alt="Marks icon reacction"
                />
              </span>
              <span className="justify-center text-[14px]">8</span>
            </button>
          </div>
        </aside>
        <section className="w-full md:w-10/12 lg:w-8/12 min-h-screen">
          {/* <CardPost /> */}
        </section>
        <aside className="hidden lg:block lg:w-3/12">
          <article className="w-full p-3 pb-4 rounded-md bg-[white] max-h-[1082px] mb-3 border-t-[31.6px] border-[#044977]">
            <header className="flex p-2 justify-between items-center">
              <p className="text-[14px]">DEV Community</p>
              <span className="rounded w-6 h-auto">
                <img className="w-4 h-auto" src="" alt="Card image" />
              </span>
            </header>
            <div className="mb-5">
              <img
                className="rounded-md max-h-[765px] max-w-full"
                src=""
                alt="Card content image"
              />
            </div>
            <div className="mb-[10px]">
              <h2 className="block text-2xl text-[#404040] font-bold"></h2>
            </div>
            <div className=""></div>
          </article>
        </aside>
      </main>
      <Footter />
    </>
  );
}
