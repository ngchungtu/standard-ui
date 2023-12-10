import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import '../styles/carousel.css'

const CarouselComponent = () => {
    return (
        <Carousel
            arrows
            autoPlay
            autoPlaySpeed={1500}
            centerMode={false}
            className="carousel-custom-container"
            containerClass="container-with-dots"
            dotListClass="carousel-dot-custom"
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={2}
            swipeable
        >
            <div className='carousel_item'>
                <img src='https://cdn.pixabay.com/photo/2023/09/28/07/18/oak-tree-8280839_1280.jpg' alt=''/>
            </div>
            <div className='carousel_item'>
                <img src='https://cdn.pixabay.com/photo/2023/09/05/18/44/mountains-8235664_1280.jpg' alt=''/>
            </div>
            <div className='carousel_item'>
                <img src='https://cdn.pixabay.com/photo/2023/11/08/05/46/winter-8373941_1280.jpg' alt=''/>
            </div>
            <div className='carousel_item'>
                <img src='https://cdn.pixabay.com/photo/2023/11/24/19/11/road-8410533_1280.jpg' alt=''/>
            </div>
            <div className='carousel_item'>
                <img src='https://cdn.pixabay.com/photo/2023/09/19/11/01/beach-8262340_1280.jpg' alt=''/>
            </div>
        </Carousel>
    )
}

export default CarouselComponent