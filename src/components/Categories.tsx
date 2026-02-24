// @ts-nocheck

const categories = [
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
export default function Categories(props) {
	const categoryItems = categories.map((item) => (
		<button
			key={item.id}
			className={props.value == item.id ? "active" : ""}
			onClick={() => props.onClickCategory(item.id)}>
			{item.category}
		</button>
	))
	return (
		<div className="content selection">
			<div className="categories">{categoryItems}</div>
			<div className="sort">
				<img src="./img/filter.png" />
				Sort by:
				<select>
					<option>Popularity</option>
				</select>
			</div>
		</div>
	)
}
