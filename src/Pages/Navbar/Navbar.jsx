import { useState } from 'react';
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-zinc-100 text-gray-700 p-4 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-xl font-bold">
            <img className='w-[200px]' src="https://i.ibb.co/JRHSrS3/new-sitelogo.png" alt="" />
          </div>
          <div className="hidden md:flex space-x-4 clear-start font-extrabold text-xl">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <div className="avatar w-8 h-8 bg-gray-700 rounded-full"></div>
            <button className="bg-red-500 p-2 rounded-md hover:bg-red-600 text-white">Logout</button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <a href="#home" className="block hover:underline">Home</a>
            <a href="#about" className="block hover:underline">About</a>
            <a href="#services" className="block hover:underline">Services</a>
            <a href="#contact" className="block hover:underline">Contact</a>
            <input
              type="text"
              placeholder="Search"
              className="block p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
