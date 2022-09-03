import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <div className="bg-indigo-900 h-full">
            <div className="transition ease-in-out duration-500 bg-gradient-to-br from-blue-900">
                <Navbar />
                {children}
                <Footer />
            </div>
            <div>
                uwu
            </div>
        </div>
        
    )
}