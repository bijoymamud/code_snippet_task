const Navbar = () => {


  return (
    <section className="bg-gray-100 min-h-screen p-5">
      
      {/* navbar section start */}
      <div className="bg-white flex items-center justify-between p-3 rounded-lg" >

          <div className="flex items-center gap-2  rounded-lg  ">

          <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
          </div>

          <div >
            <h2 className="text-sm ">Al Mamud Bijoy</h2>
            <p className="text-sm text-gray-400" >bijoymamud4@gmail.com</p>
          </div>
          </div>

          <div className="w-2/4">
              <label className="input input-bordered flex items-center gap-2">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd" />
                  </svg>
                  <input type="text" className="grow" placeholder="Search a snippet" />
            </label>
          </div>

          <div>
          <input type="checkbox" className="toggle" defaultChecked />

          </div>

      </div>
      {/* navbar section start */}


    </section>
  );
};

export default Navbar;
