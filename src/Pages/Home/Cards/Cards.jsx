import useProducts from "../../../Hooks/useProducts";
import SingleCard from "./SingleCard";


const Cards = () => {
  const [items, loading] = useProducts()
  if (loading) {
    return <div>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  }
  return (
    <section className="py-32">
      <div>
        <h2 className="text-3xl font-bold">Total List of Items : {items.length}</h2>
        
      </div>

      <div className="grid grid-cols-3 gap-8 py-32">
        {
          items.map((item) => <SingleCard key={item.id} item={item}></SingleCard>)
        }
      </div>
    </section>
  );
};

export default Cards;