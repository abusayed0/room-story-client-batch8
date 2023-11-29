import Slider from "../slider/Slider";
import Faq from "../faq/Faq";
import Testimonials from "../testimonial/Testimonials";
import Services from "../services/Services";
import Blogs from "../blogs/Blogs";

const Home = () => {

    return (
        <div>
            <Slider />
            <Services/>
            <Testimonials/>
            <Blogs/>
            <Faq/>
        </div>
    );
};

export default Home;