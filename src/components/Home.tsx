// @ts-nocheck

import Hero from "./Hero"
import Sort from "./Sort"
import Catergories from "./Categories"
import { useState, useEffect, useContext } from "react"
import Pizza from "./Pizza"
import Pagination from "./Pagination/Pagination"
import { SearchContext } from "../App"

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
	const [currentPage, setCurrentPage] = useState(1)
	const [pizzas, setPizzas] = useState([])
	const { searchValue, setSearchValue } = useContext(SearchContext)
	useEffect(() => {
		setCurrentPage(1)
	}, [activeCategory, activeSort])
	const categoryQuery = activeCategory > 0 ? `category=${activeCategory}` : ""
	useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://69952df7b081bc23e9c23781.mockapi.io/items?${categoryQuery}&sortBy=${activeSort.property}&order=desc&page=${currentPage}&limit=4&search=${searchValue}`,
		)
			.then((res) => {
				return res.json()
			})
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
	}, [activeCategory, activeSort, currentPage, searchValue])
	const pizzasItems = pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
	return (
		<>
			<Hero />
			<div className="content selection">
				<Catergories
					value={activeCategory}
					onClickCategory={(id) => setActiveCategory(id)}
				/>
				<Sort value={activeSort} onChangeSort={(id) => setActiveSort(id)} />
			</div>
			<div className="content">
				<h3>All Pizzas</h3>
				<h4>Explore our curated selection of delicious handmade options.</h4>
				<div className="pizzas">{isLoading ? emptyPizzas : pizzasItems}</div>
				<Pagination
					currentPage={currentPage}
					onChangePage={(number) => setCurrentPage(number)}
				/>
			</div>
		</>
	)
}
