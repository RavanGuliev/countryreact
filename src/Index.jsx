import { useEffect, useState } from "react";
import Cards from "./Cards";
import RandomCard from "./RandomCard";


function Index() {
    const [data ,setData] = useState([])
	const [count , setCount] = useState(12)

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,region")
        .then((res)=>res.json())
         .then((json) => setData(json));


    },[])

   const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
   const randomIndex = rand(0, data.length)



  return (
    <main className="bg-gray-500" >
      
        <section className="sm:py-12 bg-gray-500 text-white">
	<div className="container px-20 mx-auto space-y-8">
    <RandomCard {...data[randomIndex]} />
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Rest Countries</h2>
			<p className="font-serif text-xl dark:text-gray-200">(default)</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

			{
                data.slice(0 , count).map((item,index)=>  <Cards{...item} key={item.cca3} />)
            }
		
		</div>
	</div>
</section>
<section>
	<div className="text-center p-2">
	<button onClick={()=> setCount(count+12)} className="py-3 px-10 text-white border  border-blue-500 bg-blue-500  rounded-md ">Elave Et</button>
	</div>
</section>
    </main>
  )
}

export default Index