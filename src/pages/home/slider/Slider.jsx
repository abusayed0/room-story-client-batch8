import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {

    return (
        <div className="">

            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
                animation="cubeAnimation"
                bullets={false}
                className=""
            >
                <div data-src="https://i.ibb.co/165CXLq/armchair-green-living-room-with-copy-space-43614-910.jpg" />
                <div data-src="https://i.ibb.co/cCMPBNk/3d-rendering-loft-luxury-living-room-with-bookshelf-105762-2099.jpg" />
                <div data-src="https://i.ibb.co/Fz7wQVG/bangkok-thailand-august-12-2016-beautiful-luxury-living-room-1203-2867.jpg" />
                <div data-src="https://i.ibb.co/jgpTQCh/3d-rendering-modern-dining-room-living-room-with-luxury-decor-105762-1934.jpg" />
                <div data-src="https://i.ibb.co/swrqK4Y/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-105762-2052.jpg" />
                <div data-src="https://i.ibb.co/fnxzrY1/modern-apartment-with-comfortable-sofa-decor-generated-by-ai-188544-38495.jpg" />
            </AutoplaySlider>
        </div>

    );
};

export default Slider;