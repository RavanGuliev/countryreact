import { useEffect, useState } from "react";


function Index() {
    const [data ,setData] = useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,region")
        .then((res)=>res.json())
         .then((json) => setData(json));


    },[])


  return (
    <main className="bg-gray-500" >
        <section className="sm:py-12 bg-gray-500 text-white">
	<div className="container px-20 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Prosta Olkeler brat</h2>
			<p className="font-serif text-xl dark:text-gray-200">(Heleki)</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

			{
                data.map((item,index)=>(
                    <article key={index} className="flex flex-col  bg-gray-300 rounded-2xl overflow-hidden">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 " src={item.flags.png} />
				</a>
				<div className="flex flex-col flex-1 p-6">
		
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{item.region}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text">{item.name.common}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>{item.capital}</span>
						<span>{item.region}</span>
					</div>
				</div>
			</article>

            
                ))
            }
		
		</div>
	</div>
</section>
    </main>
  )
}

export default Index