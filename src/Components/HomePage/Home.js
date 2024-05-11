import React from 'react';
import { banner01, banner02, banner03 } from '../../Images';


const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                {/* start slider section */}
            <div className="carousel w-full">
  <div className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" alt="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" alt =""/>
    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div> */}
  </div> 
  <div className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" alt=""/>
    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div> */}
  </div>
</div>
{/* end slider section */}

<div className='grid gap-4 grid-cols-3 grid-rows-3'>
    <div>
        <img className='h-72' src={banner01} alt=""/>
    </div>
    <div>
    <img className='h-72' src={banner02} alt=""/>
    </div>
    <div>
    <img className='h-72' src={banner03} alt=""/>
    </div>
</div>

            </div>
        </div>
    );
};

export default Home;