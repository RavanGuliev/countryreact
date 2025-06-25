

function Cards({flags, region, capital,name}) {
  return (
     <article  className="flex flex-col  bg-gray-300 rounded-2xl overflow-hidden">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 " src={flags.png} />
				</a>
				<div className="flex flex-col flex-1 p-6">
		
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{	region}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text">{name.common}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>{capital}</span>
						<span>{region}</span>
					</div>
				</div>
			</article>
  )
}

export default Cards