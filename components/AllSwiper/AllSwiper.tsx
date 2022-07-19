import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, EffectFade} from 'swiper'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const AllSwiper = ({feeds}) => {
  const ChooseElementToRender = feed => {
    switch (feed.media_type) {
      case 'IMAGE':
        return (
          <>
            <div className="image-container">
              <Image
                src={feed.media_url}
                alt={feed.caption}
                layout="responsive"
                height={640}
                width={360}
                objectFit="cover"
              />
            </div>
          </>
        )
      case 'VIDEO':
        return (
          <>
            <div className="video-container">
              <ReactPlayer
                url={feed.media_url}
                width="100%"
                height="100%"
                controls
                className="react-player"
                config={{
                  facebook: {
                    appId: `${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}`,
                  },
                }}
              />
            </div>
            <style jsx>{`
              .video-container {
                background-color: black;
                position: relative;
                padding-bottom: 177.77%; /* 16:9 */
                height: 0;
              }

              :global(.react-player) {
                overflow: hidden;
                position: absolute;
                inset: 0;
              }
            `}</style>
          </>
        )
      case 'CAROUSEL_ALBUM':
        return (
          <div className="carrousel-container">
            <Image
              src={feed.media_url}
              alt={feed.caption}
              layout="responsive"
              height={640}
              width={360}
              objectFit="cover"
            />
          </div>
        )
    }
  }

  return (
    <>
      <h3>InstagramFeed @gianpitri</h3>
      <div className="swiper-container">
        <Swiper
          modules={[Pagination, EffectFade]}
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
          pagination={{clickable: true}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {feeds.map(feed => (
            <SwiperSlide key={feed.id}>
              {ChooseElementToRender(feed)}
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`

        `}</style>
      </div>
    </>
  )
}
