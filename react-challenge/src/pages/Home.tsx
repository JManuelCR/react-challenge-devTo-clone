import Navbar from "../components/Navbar"
import Footter from "../components/Footter"
import AsideLeft from "../components/AsideLeft"

export default function Home () {
    return (
        <>
        <Navbar />
        <main className="min-h-screen w-full grid-cols-3 grid-rows-1 p-4 gap-2">
            <aside className="w-0 md:w-1/4"><AsideLeft /></aside>
            <section className="w-full md:w-3/4 lg:w-1/2"></section>
            <aside className="w-0 lg:w-1/4"></aside>
            
        </main>
        <Footter />
        </>
    )
}