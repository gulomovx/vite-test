import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
const Home = () => {
    
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["cats"],
        queryFn: () =>
          fetch("https://catfact.ninja/fact").then((res) => res.json()),
      });
    
  
  // const { data } = useQuery(['cat'], () => {
  //     return axios.get("https://catfact.ninja/fact").then((res)=>res.data)
  // })
    console.log(data);
    if (isLoading) {
        return <h1 className="text-3xl">Loading...</h1>
    }
    if (isError) {
        return <h1 className="text-3xl text-red-600">Error</h1>
    }
  return (
    <div className="h-screen bg-orange-100 ">
          <h1 className="text-3xl border bg-slate-200 p-4 pt-8">{data?.fact}</h1>
          <button onClick={refetch} className="border p-2">Refetch</button>
    </div>
  );
};

export default Home;
