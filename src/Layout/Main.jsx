
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
  return (
    <div className='min-h-screen bg-gray-100  p-5'>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Main;