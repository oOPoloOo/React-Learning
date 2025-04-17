import Footer from "../UI/oganisms/Footer";
import Header from "../UI/oganisms/Header";
import { Outlet } from "react-router";

const MainOutlet = () => {
    return ( 
        <>
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
    </>
     );
}
 
export default MainOutlet;