// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6"

register();

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';


const Testimonials = () => {

    return (
        <div className="mt-20 border p-2 md:p-5 bg-[#e7cbcb33]">
            <div className="text-center">
                <h2 className="mt-2 text-4xl font-bold">Our recent happy customer reviews</h2>
            </div>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mt-10 mySwiper"
                loop={true}
                slidesPerView={1}
                // autoHeight={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        
                        <p>I could not be happier with the room decoration services provided by this website. The attention to detail and the ability to capture my style surpassed my expectations. The transformation of my space is absolutely stunning. Thank you for making my home feel like a true reflection of me!</p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/wY0Wfvq/photo-1499557354967-2b2d8910bcca-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">Sarah M</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        
                        <p className="text-center">
                        The room decoration ideas I found on this website were fantastic! The blog posts and inspiration gallery gave me the creative boost I needed. The only reason it's not a 5 is because I wish there were even more tips and ideas. Nonetheless, great resource for anyone looking to spruce up their living space!
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/HptFDh4/photo-1534308143481-c55f00be8bd7-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">Alex P</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                       
                        <p className="text-center">
                        Exceptional customer service! I reached out with a few questions about the best color schemes for my living room, and the team responded promptly with valuable advice. The personalized attention to my concerns made the whole experience enjoyable. Highly recommend their expertise!
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/tzvR9C5/photo-1521341957697-b93449760f30-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">Emily</h4>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="border p-2 bg-white flex flex-col gap-2 justify-center items-center">
                        
                        <p className="text-center">
                        I recently purchased a few room decor items from this website, and the quality exceeded my expectations. The products were unique, and the shipping was fast. The only reason I'm not giving it a perfect score is because I wish there were more items to choose from. Nevertheless, very satisfied with my purchase!
                        </p>
                        <div className="flex flex-col justify-center items-center">
                            <img className="w-14 h-14 rounded-full" src="https://i.ibb.co/dDXWsbn/photo-1518109331836-a2a7e93f89bb-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg" alt="" />
                            <h4 className="text-xl">Sarepu</h4>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>

    );

};

export default Testimonials;