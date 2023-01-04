import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <div className="">
            <div className="h-full">
                <div className="transition ease-in-out duration-500 ">
                    {children}
                </div>
            </div>
        </div>
        
        
    )
}