// @ts-nocheck

import { useState, useEffect, createContext } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.scss"
import Header from "./components/Header"
import Pizza from "./components/Pizza"
import Catergories from "./components/Categories"
import Sort from "./components/Sort"

import { Outlet } from "react-router"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Cart from "./components/Cart"

export const SearchContext = createContext("")
function App() {
	const [searchValue, setSearchValue] = useState("")
	return (
		<>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<Outlet />
			</SearchContext.Provider>
		</>
	)
}

export default App
