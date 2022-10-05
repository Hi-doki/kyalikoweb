import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <div className="bg-black">
            <div className="bg-[#191b33] h-full">
                <div className="transition ease-in-out duration-500 bg-gradient-to-br from-slate-900 ">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
        
        
    )
}