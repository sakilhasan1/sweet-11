import React from 'react';
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img44 from '../../Assets/img44.jpg'


const Carousel = () => {
    return (
        <div className="carousel mt-20">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt="" className=" rounded-xl h-1/2 w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt="" className="rounded-xl h-1/2 w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt="" className=" h-1/2 w-full rounded-xl " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img44} alt="" className="h-1/2 w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;