import { Outlet } from "react-router-dom";
import NavigaionBar from "../../shared-components/navigation-bar/NavigationBar";

const MainLayout = () => {
    return (
        <div>
            <NavigaionBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;