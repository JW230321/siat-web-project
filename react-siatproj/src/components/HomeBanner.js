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

function HomeBanner() {

    const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
    const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
    const craterRock = "https://i.imgur.com/8DYumaY.jpg";
    const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

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
                    <img src={bogliasco} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={countyClare} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={craterRock} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={giauPass} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeBanner;