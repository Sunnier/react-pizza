// @ts-nocheck

import Hero from "./Hero"
import Sort from "./Sort"
import Catergories from "./Categories"
import { useState, useEffect } from "react"
import Pizza from "./Pizza"

const onChangeSort = (sortType) => {
	setSortType(sortType)
	console.log(sortType)
	// trigger a fetch or re-sort your data here
}
const emptyPizzas = new Array(6)
	.fill(null)
	.map((_, index) => <Pizza key={index} loading="true" />)

export default function Home() {
	const [isLoading, setIsLoading] = useState(true)
	const [pizzas, setPizzas] = useState([])
	useEffect(() => {
		fetch("https://69952df7b081bc23e9c23781.mockapi.io/items")
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				setTimeout(() => {
					setIsLoading(false)
					setPizzas(json)
				}, 1000)
			})
	}, [])
	const pizzasItems = pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)

	const [sortType, setSortType] = useState({
		name: "Popularity",
		property: "rating",
	})
	return (
		<>
			<Hero />
			<Sort value={sortType} onChangeSort={onChangeSort} />
			<Catergories />
			<div className="content">
				<h3>All Pizzas</h3>
				<h4>Explore our curated selection of delicious handmade options.</h4>
				<div className="pizzas">{isLoading ? emptyPizzas : pizzasItems}</div>
			</div>
		</>
	)
}
