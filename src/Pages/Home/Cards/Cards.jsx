import { useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import useProducts from "../../../Hooks/useProducts";
import SingleCard from "./SingleCard";


const Cards = () => {
  const [items, loading] = useProducts();
  const [isPanelOpen, setIsPanelOpen] = useState(false);


  if (loading) {
    return <div>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }



  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };


  return (
    <section className="py-32">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Total List of Items : {items.length}</h2>
        <BiSolidShoppingBags className="text-3xl cursor-pointer" onClick={handleTogglePanel} />

      </div>

      <div className="grid grid-cols-3 gap-8 py-32">
        {
          items.map((item) => <SingleCard key={item.id} item={item}></SingleCard>)
        }
      </div>

      {isPanelOpen && (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 p-6">
          <button className="absolute top-4 right-4 text-xl" onClick={handleTogglePanel}>
            Close
          </button>
          <div className="mt-8">
            {/* Add any content you want to display in the side panel here */}
            <h2 className="text-2xl font-bold">Panel Content</h2>
            <p>This is the content inside the side panel.</p>
          </div>
        </div>
      )}

    </section>
  );
};

export default Cards;