
function RandomCard({flags, region, capital, name}) {
  return (
	<article  className="block max-w-sm gap-3 mx-auto sm:max-w-[800px] rounded-md group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#d1d5dc]">
			<img src={flags?.png} className="object-cover overflow-hidden w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5 bg-[#d1d5dc] rounded-md">
				<h3 className="text-2xl font-semibold sm:text-4xl text-black group-hover:underline group-focus:underline">{name?.common}</h3>
				<span className="text-xs dark:text-gray-900">{region}</span>
				<p className="text-xs text-black">{capital}</p>
			</div>
		</article>
	

  )
}

export default RandomCard