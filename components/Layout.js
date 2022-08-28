import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return (
        <div className="bg-gradient-to-br from-blue-900">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}