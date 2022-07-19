import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, EffectFade} from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const InstagramImages = ({images}) => {
  return (
    <>
      <h3>InstagramFeed @gianpitri</h3>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation
        pagination={{clickable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <div className="image-container">
              <Image
                src={image.media_url}
                alt={image.caption}
                layout="responsive"
                height={400}
                width={250}
                objectFit="cover"
              />
              <div className="image-caption">
                <p>{image.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .image-container {
          position: relative;
        }

        .image-caption {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </>
  )
}
