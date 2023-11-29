import { Outlet } from "react-router-dom";
import NavigaionBar from "../../shared-components/navigation-bar/NavigationBar";
import Footer from "../../shared-components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavigaionBar/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayout;