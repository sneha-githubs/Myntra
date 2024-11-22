import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { UseCategory } from '../Hooks/UseCategory';
import '../assets/Category.modules.css'


export const Category = () => {
  const { category, errMsg, setErrMsg } = UseCategory()
  return (
    <section className="category pt-5 pb-3">
      <div className="container">
        <h3>All Categories</h3>
        <div className="row">
          <div className="col-md-12">
           <Swiper className='mySwiper' modules={[Navigation,Autoplay]} autoplay={false} navigation={true} slidesPerView={6} spaceBetween={20}>
            {category.length > 0 ?
            (category.map((item)=>(
         <SwiperSlide><h4>{item.name}</h4></SwiperSlide>)
            )): null
            }
            
            
           </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
