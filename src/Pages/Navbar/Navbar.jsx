import {FaSearchPlus } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// import required modules
import 'swiper/css';
import 'swiper/css/free-mode';

const Navbar = () => {


  return (
    <section className="">
      
      {/* navbar section start */}
      <div className="bg-white flex items-center justify-between p-3 rounded-md" >

          <div className="flex items-center gap-2  rounded-lg  ">

          <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
          </div>

          <div >
            <h2 className="text-xs font-semibold">Al Mamud Bijoy</h2>
            <p className="text-xs text-gray-400" >bijoymamud4@gmail.com</p>
          </div>
          </div>

         

    <div className="relative flex items-center w-2/4 border h-10 rounded-full  overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <FaSearchPlus className="h-4 w-5" />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-24"
              type="text"
              placeholder="Search a snippat..."
            />
            <button className="absolute text-sm right-1 h-7 w-20 bg-violet-500 text-white rounded-full hover:bg-violet-600">
              + Snippet
            </button>
      </div>

          <div>
          <input type="checkbox" className="toggle" defaultChecked />

          </div>

      </div>
      {/* navbar section end */}


      {/* tabs section start */}
        <div className="flex items-center justify-between gap-10 p-2 rounded-md my-5 bg-white" >

            <div className=" ">
                  <h1 className="btn btn-sm bg-purple-500 hover:bg-purple-800 text-white  rounded-md">All</h1>
              </div>

                <div className="w-10/12 cursor-pointer">
                      <Swiper
                              slidesPerView={6}
                              spaceBetween={10}
                              freeMode={true}
                              pagination={{
                                clickable: true,
                              }}
                              modules={[FreeMode, Pagination]}
                              className="mySwiper r"
                            >
                              <SwiperSlide className="">Java Exercise</SwiperSlide>
                              <SwiperSlide>React Exercise</SwiperSlide>
                              <SwiperSlide>C++ Exercise</SwiperSlide>
                              <SwiperSlide>JS Exercise</SwiperSlide>
                              <SwiperSlide>Python Exercise</SwiperSlide>
                              <SwiperSlide>Redux Exercise</SwiperSlide>
                              <SwiperSlide>NextJs Exercise</SwiperSlide>
                              <SwiperSlide>Angular Exercise</SwiperSlide>
                              <SwiperSlide>Rubi Exercise</SwiperSlide>
                              <SwiperSlide>Java Exercise</SwiperSlide>
                              
                            </Swiper>
                </div>



                <div className=" ">
                  <h1 className="btn btn-sm bg-purple-500 hover:bg-purple-800  text-white  rounded-md">+Tag</h1>
              </div>

      </div>

      {/* tabls section end */}


    </section>
  );
};

export default Navbar;
