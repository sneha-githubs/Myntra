
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import s1 from '../assets/s1.jpeg'
import s2 from '../assets/s2.jpeg'


export const Slider = () => {

  const sliderImg = {
    height: '500px',
    width:'100%',
    objectFit:'cover'
  }
  return (
    <>
      <Swiper modules={[Navigation, Autoplay]} navigation={true} slidesPerView={1} autoplay={true} className='mySwiper'>
       
            <SwiperSlide >
              <img src={s1} alt='' style={sliderImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={s2} alt='' style={sliderImg}/>
            </SwiperSlide>
          
      </Swiper>
    </>
  );
};
