// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// import { useRef } from 'react';


// eslint-disable-next-line react/prop-types
const ProjectSwiper = ({ pic1, pic2, pic3, pic4, pic5 }) => {

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-60 sm:w-80 md:w-[480px] xl:w-[620px] h-40 sm:h-48 md:h-[300px] xl:h-[400px] rounded-2xl border-2 border-black"
            >
                <SwiperSlide><img src={pic1} /></SwiperSlide>
                <SwiperSlide><img src={pic2} /></SwiperSlide>
                <SwiperSlide><img src={pic3} /></SwiperSlide>
                <SwiperSlide><img src={pic4} /></SwiperSlide>
                <SwiperSlide><img src={pic5} /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default ProjectSwiper;