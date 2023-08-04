// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import '../css/banner.css'
import banner1 from '../home_img/banner1.jpg'
import banner2 from '../home_img/banner3.jpg'
import banner3 from '../home_img/banner4.jpg'
import banner4 from '../home_img/banner2.jpg'
import banner5 from '../home_img/banner5.jpg'
import banner6 from '../home_img/banner6.jpg'
function HomeBanner() {

    // const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
    // const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
    // const craterRock = "https://i.imgur.com/8DYumaY.jpg";
    // const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
    return (
        <div id="hero">
            <Swiper
                // install Swiper modules
                centeredSlides={true}
                autoplay={{ // 자동으로 넘김
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: false }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                // effect={"cube"}
                // cubeEffect={{
                //     shadow: true,
                //     slideShadows: true,
                //     shadowOffset: 20,
                //     shadowScale: 0.94,
                // }}
                loop={"true"}
            >
                <SwiperSlide>
                    <img src={banner1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeBanner;