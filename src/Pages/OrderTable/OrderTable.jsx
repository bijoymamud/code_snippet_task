
import React from 'react';
import { BiExport } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { HiBellAlert } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import useOrder from '../../Hooks/useOrder';

const OrderTable = () => {
  const [orders] = useOrder();
  console.log(orders);

  const delivered = orders.filter(item => item.status === 'Delivered')
  const pending = orders.filter(item => item.status === 'Pending')
  const cancelled = orders.filter(item => item.status === 'Cancelled')

  return (
    <section className='pb-20'>
      <div className='main_upper pt-10 flex items-center justify-between w-full'>
        <div className=' flex items-center gap-5'>
          <h2 className=' text-xl font-extrabold '>Orders</h2>
          <label className="input input-bordered w-11/12 flex items-center gap-2">
            <input type="text" className="grow " placeholder="Search" />
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
          </label>
        </div>

        <div className='flex items-center gap-3 img_div'>
          <button className=' rounded-full'>
            <HiBellAlert className='text-primary text-3xl' />
          </button>

          <div className="avatar">
            <div className="w-14 h-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <p>Emmy Jonshon</p>
            <p className='text-gray-500'>ID: 42578</p>
          </div>
        </div>
      </div>

      <div className='main_div px-3 drop-shadow-xl rounded-md bg-teal-50 grid grid-cols-3 md:grid-cols-5 gap-5 w-full my-20 py-10 text-center'>
        <div className='flex items-center gap-2 text-xl font-extrabold text-primary '>
          <LuCalendarDays className='md:text-5xl text-2xl' />
          <p>This Month</p>
        </div>
        <div>
          <p className='text-gray-500'>Total Orders</p>
          <p className='font-extrabold'>{orders.length}</p>
        </div>
        <div>
          <p className='text-gray-500'>Delivered</p>
          <p className='font-extrabold'>{delivered.length}</p>
        </div>
        <div>
          <p className='text-gray-500'>Pending</p>
          <p className='font-extrabold'>{pending.length}</p>
        </div>
        <div>
          <p className='text-gray-500'>Cancelled</p>
          <p className='font-extrabold'>{cancelled.length}</p>
        </div>
      </div>

      <div className='w-full flex items-center justify-between bg-teal-50 drop-shadow-xl px-3'>
        <div className='w-1/2'>
          <h2 className='md:mt-8 text-xl font-extrabold text-primary'>Order List</h2>
          <span className='md:divider'></span>
        </div>
        <div className='w-1/2 flex items-center justify-end gap-5'>
          <button className='text-primary border-gray-500 btn btn-outline'><BiExport />Export CSV</button>
          <button className='text-primary border-gray-500 btn btn-outline'><FaPlus />Create Order</button>
        </div>
      </div>

      <div className="overflow-x-auto bg-stone-100 drop-shadow-xl">
        <table className="table table-xs">
          <thead className='text-xl w-full bg-teal-50 drop-shadow-xl text-black'>
            <tr>
              <th>Order Date</th>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>COD</th>
              <th>Earn/Deduct (tk)</th>
              <th>Status</th>
              <th>Track Parcel</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className='text-gray-500'>
            {orders.map(order => (
              <tr key={order.id} className=''>
                <td className='text-base py-5'>{order.order_date}</td>
                <td className='text-base py-5'>{order.order_id}</td>
                <td className='text-base py-5'>{order.customer_name}</td>
                <td className='text-base py-5'>{order.cod}</td>
                <td><span className='ms-14 py-5 text-base mx-auto'>{order.deduct}</span></td>
                <td className='text-lg py-5'>{order.status}</td>
                <td className='text-lg py-5'>{order.track_parcel}</td>
                <td><BsThreeDots className='text-lg' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;
