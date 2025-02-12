import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <header className="">
                <Navbar/>
            </header>

            <main className="min-h-[calc(100vh-450px)]">
                <Outlet />
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Root;