import { useEffect, useState } from "react";

const useOrder = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../public/order.json")
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          console.log(data);
          setOrders(data);
          setLoading(false)
        })
      })
  }, [])
  return [orders, loading]

};

export default useOrder;