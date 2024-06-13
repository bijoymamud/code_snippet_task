

// const SingleCard = ({ item, onBuyNow }) => {
//   const { id, model_name, img, price } = item;
//   return (
//     <section>
//       <div className="card w-full bg-base-100 shadow-xl">
//         <figure><img className="h-[250px] w-full" src={img} alt="laptop" /></figure>
//         <div className="card-body">
//           <h2 className="card-title">{model_name}</h2>
//           <p>${price}</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-sm" onClick={() => onBuyNow(id)}>Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleCard;

const SingleCard = ({ item, onBuyNow }) => {
  const { id, model_name, img, price } = item;
  return (
    <section>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] w-full" src={img} alt="laptop" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{model_name}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm" onClick={onBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
