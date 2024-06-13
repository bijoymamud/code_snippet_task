import { useEffect, useState } from 'react';

const useProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch("../../public/products.json")
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setItems(data);
          console.log(data);
          setLoading(false)
        },)
      })
  }, [])
  return [items, loading]
};

export default useProducts;