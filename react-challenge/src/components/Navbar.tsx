import devtoIcon from "../assets/img/devto-icon.png" 
import searchLoupe from "../assets/icons/loupe-Icon.svg"

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-[#fff]">
        <div className="flex">
          <a className="normal-case text-xl">
            <img className="h-[40px] max-w-[100%]" src={devtoIcon} alt="Devto-icon" />
          </a>
        </div>
        <div className="mx-2">
            <form action="submit">
                <div>
                    <div>
                        <input className="bg-[#000] rounded" type="text" />
                        <button>
                            <img className="" src={searchLoupe} alt="search icon" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="flex-none">
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
        </div>
      </nav>
    </>
  );
}
