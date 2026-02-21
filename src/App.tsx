// @ts-nocheck

import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.scss"
import Header from "./components/Header"
import Pizza from "./components/Pizza"
import Catergories from "./components/Categories"
import Sort from "./components/Sort"

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Cart from "./components/Cart"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
