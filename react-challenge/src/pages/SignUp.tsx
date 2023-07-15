import { buttonsSignUp } from "../data/buttonsSignUp";
import LoginButtonNetwork from "../components/LoginButtonNetwork";
import Footer from "../components/Footter";
import Navbar from "../components/Navbar";

export default function SignUp() {
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
            {buttonsSignUp.map((button, index) => {
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
            <span className="absolute bg-[#fff] top-1 px-3 flex gap-1">              
            Already have an account? 
            <a href="" className="text-[#3B49DF]">Log in.</a>
            </span>
          </div>
          <form action="submit" className="flex flex-col gap-3">
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              User name:
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="text"
              placeholder="User name"
            />
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              User profile image:
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="text"
              placeholder="Url user img"
            />
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              Email:
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="email"
              placeholder="useremail@mail.com"
            />
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              {" "}
              Password:
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="password"
              placeholder="password"
            />
            <label className="font-normal text-md text-[#171717]" htmlFor="">
              {" "}
              Confirm password:
            </label>
            <input
              className="border-slate-400 h-12 border rounded-md bg-[#fff]"
              type="password"
              placeholder="password"
            />
            <div className="bg-[#3B49DF] text-[#fff] h-12 flex items-center justify-center font-semibold rounded cursor-pointer">
              <input type="submit" value="Register" />
            </div>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  );
}
