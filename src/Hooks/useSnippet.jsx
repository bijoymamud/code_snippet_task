import { useEffect, useState } from "react";


const useSnippet = () => {
   const [snippats, setSnippats] = useState([])


   useEffect(()=>{
    fetch("../../public/snippet.json")
    .then(res => res.json())
    .then(data => setSnippats(data))
   }, [])
   return [snippats];
};

export default useSnippet;