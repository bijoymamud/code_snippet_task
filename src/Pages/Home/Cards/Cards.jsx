import { useEffect, useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import useProducts from "../../../Hooks/useProducts";
import SingleCard from "./SingleCard";

const Cards = () => {
  const [items, loading] = useProducts();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [itemsBought, setItemsBought] = useState({});

  // Load itemsBought from localStorage on component mount
  useEffect(() => {
    const storedItemsBought = localStorage.getItem("itemsBought");
    if (storedItemsBought) {
      setItemsBought(JSON.parse(storedItemsBought));
    }
  }, []);

  // Save itemsBought to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("itemsBought", JSON.stringify(itemsBought));
  }, [itemsBought]);

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleBuyNow = (id) => {
    setItemsBought((prevItemsBought) => ({
      ...prevItemsBought,
      [id]: (prevItemsBought[id] || 0) + 1,
    }));
  };

  return (
    <section className="py-32">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Total List of Items: {items.length}</h2>
        <BiSolidShoppingBags className="text-3xl cursor-pointer" onClick={handleTogglePanel} />
      </div>

      <div className="grid grid-cols-3 gap-8 py-32">
        {items.map((item) => (
          <SingleCard key={item.id} item={item} onBuyNow={() => handleBuyNow(item.id)} />
        ))}
      </div>

      {isPanelOpen && (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 p-6">
          <button className="absolute top-4 right-4 text-xl" onClick={handleTogglePanel}>
            Close
          </button>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Items Bought</h2>
            {Object.keys(itemsBought).length === 0 ? (
              <p>No items bought yet.</p>
            ) : (
              Object.entries(itemsBought).map(([id, count]) => {
                const item = items.find((item) => item.id === parseInt(id));
                return (
                  <div key={id} className="mb-4">
                    <img src={item.img} alt={item.model_name} className="w-16 h-16 inline-block mr-2" />
                    <div className="inline-block">
                      <p className="font-bold">{item.model_name}</p>
                      <p>${item.price} - {count} times</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;
