import useSnippet from "../../../Hooks/useSnippet";


const Snippats = () => {
    const [snippats] = useSnippet();
    console.log(snippats)

    return (
        <section>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                snippats.map((snippat)=><div key={snippat.id}
                >

      
      <div className="card bg-base-100  shadow-xl  ">
                        <div className="card-body">
                            <h2 className="card-title">{snippat.title}</h2>
                            <p>{snippat.date}</p>
                            {/* <p className="">{snippat.category}</p> */}
                            <div className="text-start  w-[180px]">
                                <button className="bg-red-300 btn btn-sm ">{snippat.category}</button>
                            </div>
                            <p>{snippat.description}</p>
                            <p className="bg-gray-200 rounded-lg p-2">{snippat.code}</p>
                            
                        </div>
        </div> 
      
                </div>)
            }
         </div>
        </section>
    );
};

export default Snippats;