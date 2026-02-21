const ca = [
	{
		id: 0,
		category: "All",
	},
	{
		id: 1,
		category: "Meat Lovers",
	},
	{
		id: 2,
		category: "Seafood",
	},
	{
		id: 3,
		category: "Vegetarian",
	},
]
export default function Categories() {
	return (
		<div className="content-wide selection">
			<div className="content">
				<div className="categories">
					<button className="active">All</button>
					<button>Meat</button>
					<button>Meat</button>
				</div>
				<div className="sort">
					<img src="./img/filter.png" />
					Sort by:
					<select>
						<option>Popularity</option>
					</select>
				</div>
			</div>
		</div>
	)
}
