import React from 'react';

const GridSystem = () => {
  return (
    <section>

      <div className='upper_part grid md:grid-cols-4 px-3 md:px-0 grid-cols-2 gap-5 py-10'>
        <div className='bg-gray-400 p-24 drop-shadow-lg rounded-md'>

        </div>

        <div className='bg-green-400 p-24 drop-shadow-lg rounded-md'>

        </div>

        <div className='bg-blue-400 p-24 drop-shadow-lg rounded-md'>

        </div>

        <div className='bg-red-400 p-24 drop-shadow-lg rounded-md'>

        </div>

      </div>



      <div className='main_div grid grid-cols-3 gap-5 px-3 md:px-0 mb-5'>

        <div className='col-span-2 '>
          <div className='bg-amber-400 py-36 '>
            for 2/3 area
          </div>
          <div className='bg-sky-500 py-20 mt-5'>
            for 2/3 area
          </div>
        </div>

        <div className=''>

          <div className='bg-pink-500 py-20 '>
            for 1/3 area
          </div>
          <div className='bg-fuchsia-600 py-40 mt-5'>
            under  main
          </div>
        </div>

      </div>



    </section>
  );
};

export default GridSystem;