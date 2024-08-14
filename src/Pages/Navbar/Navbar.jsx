import {FaSearchPlus } from "react-icons/fa";

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
      <div className="flex items-center justify-between p-2 rounded-md my-5 bg-white" >

            <div className="">
                  <div role="tablist" className="tabs ">
                      <a role="tab" className="tab bg-violet-500 rounded-md text-white">All</a>
                      <a role="tab" className="tab tab-active text-gray-500">Filter Functions Exercises </a>
                      <a role="tab" className="tab text-gray-500">API Methods</a>
                      <a role="tab" className="tab text-gray-500">JavaScript Functions</a>
                      <a role="tab" className="tab text-gray-500">React Functions</a>
                      <a role="tab" className="tab text-gray-500">Reduce Functions</a>
                </div>
            </div>

            <div role="tablist" className=" ">
                <a role="tab" className="tab tab-active bg-violet-500 rounded-md text-white">+ Tag</a>
            </div>   

      </div>

      {/* tabls section end */}


    </section>
  );
};

export default Navbar;
