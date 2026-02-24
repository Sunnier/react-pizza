// @ts-nocheck

import Hero from "./Hero"
import Sort from "./Sort"
import Catergories from "./Categories"
import { useState, useEffect } from "react"
import Pizza from "./Pizza"

const onChangeSort = (sortType) => {
	setSortType(sortType)
	// trigger a fetch or re-sort your data here
}
const emptyPizzas = new Array(6)
	.fill(null)
	.map((_, index) => <Pizza key={index} loading="true" />)

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)
	const [activeCategory, setActiveCategory] = useState(0)
	const [activeSort, setActiveSort] = useState({
		name: "Popularity",
		property: "rating",
	})
	const [pizzas, setPizzas] = useState([])
	useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://69952df7b081bc23e9c23781.mockapi.io/items?${activeCategory > 0 ? `category=${activeCategory}` : ""}&sortBy=${activeSort.property}&order=desc`,
		)
			.then((res) => res.json())
			.then((json) => {
				setTimeout(() => {
					if (Array.isArray(json)) {
						setPizzas(json)
					} else {
						setPizzas([])
					}
					setIsLoading(false)
				}, 100)
			})
	}, [activeCategory, activeSort])
	const pizzasItems = pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
	return (
		<>
			<Hero />
			<Catergories
				value={activeCategory}
				onClickCategory={(id) => setActiveCategory(id)}
			/>
			<Sort value={activeSort} onChangeSort={(id) => setActiveSort(id)} />
			<div className="content">
				<h3>All Pizzas</h3>
				<h4>Explore our curated selection of delicious handmade options.</h4>
				<div className="pizzas">{isLoading ? emptyPizzas : pizzasItems}</div>
			</div>
		</>
	)
}
