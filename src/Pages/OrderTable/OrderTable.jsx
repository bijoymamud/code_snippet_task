

import React from 'react';
import { BiExport } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import useOrder from '../../Hooks/useOrder';

const OrderTable = () => {
  const [orders] = useOrder();
  console.log(orders);

  // Delivered Pending Cancelled

  const delivered = orders.filter(item => item.status === 'Delivered')
  // console.log(delivered.length);
  const pending = orders.filter(item => item.status === 'Pending')
  const cancelled = orders.filter(item => item.status === 'Cancelled')


  return (
    <section>
      <div className='main_div'>

        <div className='flex items-center gap-2 text-xl font-extrabold text-primary'>
          <LuCalendarDays className='md:text-5xl text-2xl' />
          <p >This Month</p>
        </div>

        <div>
          <p>Total Orders</p>
          <p className='font-extrabold'></p>
        </div>

      </div>

      <div className='w-full flex items-center justify-end bg-teal-50 drop-shadow-xl px-3'>
        <div className='w-1/2'>
          <h2 className='md:mt-8 text-xl font-extrabold text-primary'>Order List</h2>
          <span className='md:divider '></span>
        </div>

        <div className='w-1/2 flex items-center justify-end gap-5'>
          <button className='text-primary border-gray-500 btn btn-outline'><BiExport />Export CSV</button>
          <button className='text-primary border-gray-500 btn btn-outline'><FaPlus />Create Order</button>
        </div>
      </div>
      <div className="overflow-x-auto bg-stone-100 drop-shadow-xl ">
        <table className="table table-xs  ">
          <thead className='text-xl w-full bg-teal-50 drop-shadow-xl text-black '>
            <tr className=''>
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
              <tr key={order.id} className=''> {/* Apply the text size class here */}
                <td className='text-base py-5'>{order.order_date}</td>
                <td className='text-base py-5'>{order.order_id}</td>
                <td className='text-base py-5'>{order.customer_name}</td>
                <td className='text-base py-5'>{order.cod}</td>
                <td><span className='ms-14 py-5 text-base mx-auto '>{order.deduct}</span></td>
                <td className='text-lg py-5'>{order.status}</td>
                <td className='text-lg py-5'>{order.track_parcel}</td>
                <td>
                  <BsThreeDots className='text-lg' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderTable;
