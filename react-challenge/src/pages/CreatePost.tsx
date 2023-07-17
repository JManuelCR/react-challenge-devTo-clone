import { Link } from "react-router-dom";
import devtoIcon from "../assets/img/devto-icon.png";
import { useState } from "react";


export default function CeratePost() {
  const [clipboardText, setClipboardText] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <form action="submit" className="px-4">
      <nav className="h-[56px] w-full flex items-center p-2">
        <span className="me-3">
        <Link to={"/"}>
          <a href="">
            <img
              className="h-[40px] w-[50px] max-w-[100%]"
              src={devtoIcon}
              alt="Devto icon"
            />
          </a>
        </Link>
        </span>
        <div className="flex items-center w-[75%] justify-between">
          <div className="flex items-center">
            <div className="">
              <span className="font-normal text-base text-[#171717]">
                Create Post
              </span>
            </div>
          </div>
          <nav>
            <ul className="flex items-center gap-4">
              <li className="font-bold text-base text-[#171717]">Edit</li>
              <li className="font-normal text-base text-[#171717]">Preview</li>
            </ul>
          </nav>
        </div>
        <div className="w-[15%] flex justify-end items-center">
          <Link to ="/">
          <button className="flex justify-center items-center w-6 h-6 text-[#171717] font-normal text-xl">
            X
          </button>
          </Link>
        </div>
      </nav>
      <main className="min-h-screen flex w-full">
        <div className="hidden md:block md:w-[75px]"></div>
        <div className="w-full md:w-[80%] lg:w-[70%]">
          <div className="p-4 md:p-16 bg-[#fff]">
            <div className="w-full max-h-[240px] md:max-h-[240px] mb-4">
              <img
                className="w-full max-h-[240px]  object-cover rounded-t-md"
                src={clipboardText}
                alt=""
              />
            </div>
            <div className="flex flex-col  md:flex-row items-start md:items-center justify-start gap-3 mb-4 w-full">
              <label
                className="text-sm md:text-md lg:text-lg md:block md:w-[30%] text-[#151515]"
                htmlFor=""
              >
                Add a cover image:
              </label>
              <input
                type="text"
                className="rounded-md w-[100%] md:w-[70%]"
                placeholder="Url image"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPaste={(e) =>
                  setClipboardText(e.clipboardData.getData("text/plain"))
                }
              />
            </div>
            <input
              type="text"
              className="placeholder-[#525252] text-[#171717] border-none text-[80%] font-extrabold px-4 py-2 rounded-md w-full mb-3"
              placeholder="New post title here..."
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="mb-4 border-none w-full text-[14px] font-normal text-[#151515] placeholder-[#525252] rounded-md"
              placeholder="Write your content here..."
            ></textarea>
            <div className="flex flex-col  md:flex-row items-start md:items-center justify-start gap-3 mb-4 w-full">
              <label
                className="text-sm md:text-md lg:text-lg md:block md:w-[30%] text-[#151515]"
                htmlFor=""
              >
                Add tags:
              </label>
              <input
                type="text"
                className="rounded-md w-[100%] md:w-[70%]"
                placeholder="Tags..."
              />
            </div>
            <div className="flex flex-col  md:flex-row items-start md:items-center justify-start gap-3 mb-4 w-full">
              <label
                className="text-sm md:text-md lg:text-lg md:block md:w-[30%] text-[#151515]"
                htmlFor=""
              >
                Estimeated time to read!:
              </label>
              <input
                type="text"
                className="rounded-md w-[100%] md:w-[70%]"
                placeholder="Estimated time to read..."
              />
            </div>
            <div className="rounded-md w-full p-3 md:p-24">
              <button className="rounded-md text-[#fff] text-lg font-normal bg-[#3B49E9] w-full md:w-36 py-2 lg:ms-28 md:ms-14" type="submit">Create</button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[25%]">
          <div className="px-4 mt-32">
            <h2 className="text-[#131313] font-bold text-xl">
              Writing a Great Post Title
            </h2>
            <p className="text-[#838383] text-md p-2">
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </p>
          </div>
        </div>
      </main>
    </form>
  );
}
