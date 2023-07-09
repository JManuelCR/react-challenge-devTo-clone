import AsideLeftCard from "./AsideLeftCard";
import { leftCards } from "../data/leftcards";
import { assideOptions } from "../data/assideLeftOptions";
import { logos } from "../data/networklogos";
export interface Props {
  icon: string;
  option: string;
}
export interface NetworkLogos {
  icon: string;
}
export interface Tags {
  name: string;
}

const tagslist: Tags[] = [
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
];

export default function AsideLeft() {
  return (
    <>
      <article className="w-full p-3 pb-4 rounded-md bg-[white] max-h-[1082px] mb-3">
        <div className="mb-[10px]">
          <h2 className="block text-2xl text-[#404040] font-bold">
            DEV Community is a community of 1,097,995 amazing developers
          </h2>
        </div>
        <div className="">
          <p>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </div>
        <div className="flex flex-col">
              <span className="block leading-6 px-4 py-2 me-2 relative text-[#404040] text-8 font-normal hidden md:block">
              <a
                className="text-[#3B49E9] flex justify-center mb-1 relative py-[7px] px-[15px] text-8 md:text-[12px] font-normal border-[#3B49E9] border-[1px] rounded"
                href=""
              >
                Create account
              </a>
                <a className="flex justify-center relative py-[7px] px-[15px] text-8 md:text-[12px] font-normal" href="">Log in</a>
              </span>
            </div>
      </article>
      <ul>
        {assideOptions
          .filter((item, index, arr) => index < 13)
          .map((item, index) => {
            return (
              <a href="">
                <li
                  className="flex p-2 justify-start gap-2"
                  key={`item-${index}`}
                >
                  <span className="w-6">
                    <img
                      className="w-full h-auto"
                      src={item.icon}
                      alt="Option icon"
                    />
                  </span>
                  <p className="text-4 font-normal text-[#404040]">
                    {item.option}
                  </p>
                </li>
              </a>
            );
          })}
      </ul>
      <nav className="mb-4">
        <h2 className="font-bold text-[#404040] p-2 text-4 ps-3">Other</h2>
        <ul>
          {assideOptions
            .filter((item, index, arr) => index > 12)
            .map((item, index) => {
              return (
                <a href="">
                  <li
                    className="flex p-2 justify-start gap-2"
                    key={`item-nav-${index}`}
                  >
                    <span className="w-6">
                      <img
                        className="w-full h-auto"
                        src={item.icon}
                        alt="Option icon"
                      />
                    </span>
                    <p className="text-4 font-normal text-[#404040]">
                      {item.option}
                    </p>
                  </li>
                </a>
              );
            })}
        </ul>
      </nav>
      <div className=" flex mb-4">
        {logos.map((logo, index) => {
          return (
            <a key={`logo-${index}`} className="p-2" href="">
              <img className="w-6 h-6" src={logo.icon} alt="" />
            </a>
          );
        })}
      </div>
      <nav className="mb-6">
        <h3 className="p-2 text-4 font-bold text-[#404040]">Popular Tags</h3>
        <div className="flex flex-col overflow-scroll max-h-[328px]">
          {tagslist.map((tag, index) => {
            return (
              <span key={`tag-${index}`} className="w-full">
                <a
                  className="py-2 px-4 text-4 text-[#404040] font-normal max-w-full block"
                  href=""
                >
                  #{tag.name}
                </a>
              </span>
            );
          })}
        </div>
      </nav>
      {leftCards.map((card, index) => {
        return (
          <AsideLeftCard
            key={`leftCard-${index}`}
            isLoged={card.isLoged}
            title={card.title}
            anchorTitle={card.anchorTitle}
            cardImage={card.cardImage}
            content={card.content}
            contentAnchor={card.contentAnchor}
            isContentAnchor={card.isContentAnchor}
          />
        );
      })}
    </>
  );
}
