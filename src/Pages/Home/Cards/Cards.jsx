// import { useState } from "react";
// import { BiSolidShoppingBags } from "react-icons/bi";
// import useProducts from "../../../Hooks/useProducts";
// import SingleCard from "./SingleCard";

// const Cards = () => {
//   const [items, loading] = useProducts();
//   const [isPanelOpen, setIsPanelOpen] = useState(false);
//   const [itemsBought, setItemsBought] = useState({});

//   const handleTogglePanel = () => {
//     setIsPanelOpen(!isPanelOpen);
//   };

//   const handleBuyNow = (id) => {
//     setItemsBought((prevItemsBought) => ({
//       ...prevItemsBought,
//       [id]: (prevItemsBought[id] || 0) + 1,
//     }));
//   };

//   if (loading) {
//     return (
//       <div>
//         <span className="loading loading-bars loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//     <section className="py-32">
//       <div className="flex items-center justify-between">
//         <h2 className="text-3xl font-bold">Total List of Items: {items.length}</h2>
//         <BiSolidShoppingBags className="text-3xl cursor-pointer" onClick={handleTogglePanel} />
//       </div>

//       <label className="input input-bordered flex items-center gap-2 mt-20 w-2/6 mx-auto">
//         <input type="text" className="grow" placeholder="Search" />
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
//       </label>

//       <div className="grid grid-cols-3 gap-8 py-32">
//         {items.map((item) => (
//           <SingleCard key={item.id} item={item} onBuyNow={() => handleBuyNow(item.id)} />
//         ))}
//       </div>

//       {isPanelOpen && (
//         <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 p-6">
//           <button className="absolute top-4 right-4 text-xl" onClick={handleTogglePanel}>
//             Close
//           </button>
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold">Items Bought</h2>
//             {Object.keys(itemsBought).length === 0 ? (
//               <p>No items bought yet.</p>
//             ) : (
//               Object.entries(itemsBought).map(([id, count]) => {
//                 const item = items.find((item) => item.id === parseInt(id));
//                 return (
//                   <div key={id} className="mb-4">
//                     <img src={item.img} alt={item.model_name} className="w-16 h-16 inline-block mr-2" />
//                     <div className="inline-block">
//                       <p className="font-bold">{item.model_name}</p>
//                       <p>${item.price} x {count} </p>
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Cards;


import { useState } from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import useProducts from "../../../Hooks/useProducts";
import SingleCard from "./SingleCard";

const Cards = () => {
  const [items, loading] = useProducts();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [itemsBought, setItemsBought] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleBuyNow = (id) => {
    setItemsBought((prevItemsBought) => ({
      ...prevItemsBought,
      [id]: (prevItemsBought[id] || 0) + 1,
    }));
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.model_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="py-32">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Total List of Items: {items.length}</h2>
        <BiSolidShoppingBags className="text-3xl cursor-pointer" onClick={handleTogglePanel} />
      </div>

      <label className="input input-bordered flex items-center gap-2 mt-20 w-2/6 mx-auto">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="grid grid-cols-3 gap-8 py-32">
        {filteredItems.map((item) => (
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
                    <img
                      src={item.img}
                      alt={item.model_name}
                      className="w-16 h-16 inline-block mr-2"
                    />
                    <div className="inline-block">
                      <p className="font-bold">{item.model_name}</p>
                      <p>${item.price} x {count} </p>
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
