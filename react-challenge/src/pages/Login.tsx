import { buttonsLogin } from "../data/buttonsLogin";
import { Link } from "react-router-dom";
import LoginButtonNetwork from "../components/LoginButtonNetwork";
import Footer from "../components/Footter";
import Navbar from "../components/Navbar";  

export default function Login() {
  return (
    <>
    <Navbar />
      <main className="w-full flex justify-center py-6 min-h-screen">
        <section className="w-[640px] p-[48px] bg-[#fff] flex flex-col justify-center max-w-screen-md">
          <div className="flex justify-center flex-col px-8">
            <h1 className="text-black font-bold text-3xl text-center">
              Welcome to DEV Community
            </h1>
            <p className="pb-8 text-md text-center font-semibold p">
              DEV Community is a community of 1,096,406 amazing developers
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {buttonsLogin.map((button, index) => {
              return (
                <LoginButtonNetwork
                  key={`button-${index}`}
                  svg={button.svg}
                  title={button.title}
                  color={button.color}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-canter relative w-full top-3">
            <div className="flex justify-cente items-canter pt-4 text-lg h-16 w-full">
              <span className="w-full block bg-gray-200 h-0.5"></span>
            </div>
            <span className="absolute bg-[#fff] top-1 px-3">
              Have a password? Continue with your email address
            </span>
          </div>
          <form action="submit" className="flex flex-col gap-3">
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              Email
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="email"
            />
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              {" "}
              Password
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="password"
            />
            <div className="flex gap-2 hover:bg-[] flex items-center py-3">
              <input
                type="checkbox"
                value="1"
                name="rememberme"
                className="appearance-none w-[18px] h-[18px] rounded-md border-2 border-gay-900 cursor-pointer  default-text-[#fff] checked:text-red checked:bg-blue-500"
              />
              <label className="text-[#171717]" htmlFor="rememberme">
                Remenber me
              </label>
            </div>
            <div className="bg-[#3B49DF] text-[#fff] h-12 flex items-center justify-center font-semibold rounded cursor-pointer">
              <input type="submit" value="Continue" />
            </div>
          </form>
          <p className="text-center pt-[24px]">
            <a className="text-[#3B49E9] text-center" href=""> I forgot my password</a>
          </p>
        </section>
      </main>
      <Footer/>
    </>
  );
}
