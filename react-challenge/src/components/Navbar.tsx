import devtoIcon from "../assets/img/devto-icon.png";
import searchLoupe from "../assets/icons/loupe-Icon.svg";
import burguer from "../assets/icons/burger-Menu-Icon.svg";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[56px] bg-[#fff] flex items-center">
        <div className="md:mx-[10px] lg:mx-auto max-w-[1200px] w-full flex items-center justify-between">
          <div className=" flex items-center ">
            <span className="leading-6 block leading-6">
              <button
                className="mx-2 p-2 relative inline-block md:hidden"
                type="submit"
              >
                <img
                  className="w-[24px] h-[24px]"
                  src={burguer}
                  alt="Burguer menu icon"
                />
              </button>
            </span>
            <div className="flex">
              <a className="normal-case text-xl block">
                <span>
                  <img
                    className="h-[40px] w-[50px] max-w-[100%]"
                    src={devtoIcon}
                    alt="Devto-icon"
                  />
                </span>
              </a>
              <div className="mx-4 hidden md:block">
                <form action="submit">
                  <div className="flex flex-row flex-wrap">
                    <div
                      className="flex flex-col flex-nowrap relative shrink grow text-gray-700"
                      placeholder="Search..."
                    >
                      <input
                        className="bg-[#000] rounded py-[6.5px] px-[8px] w-[420px] resize-y bg-[white]"
                        type="text"
                      />
                      <button className="left-[380px] right-[1px] top-[5px] absolute">
                        <img
                          className="w-[28px] h-[28px]"
                          src={searchLoupe}
                          alt="search icon"
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex items-center ms-[18px] lg:ms-259px lasContainerNav me-4 md:me-0">
            <a className="md:hidden me-4" href="">
              <img
                className="w-[28px] h-[28px]"
                src={searchLoupe}
                alt="search icon"
              />
            </a>
            <div className="flex">
              <span className="block leading-6 px-4 py-2 me-2 relative text-[#404040] text-8 font-normal hidden md:block">
                <a href="">Log in</a>
              </span>
              <a
                className="text-[#3B49E9] relative flex py-[7px] px-[15px] text-8 font-normal border-[#3B49E9] border-[0.65px]"
                href=""
              >
                Create account
              </a>
            </div>
          </div>
          {/* <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}
