import { Outlet } from "react-router-dom";
import NavigaionBar from "../../shared-components/navigation-bar/NavigationBar";
import Footer from "../../shared-components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavigaionBar />
            <div className="max-w-[1320px] mx-auto px-4 md:px-8">
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default MainLayout;