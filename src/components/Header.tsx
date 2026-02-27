import { Link } from "react-router"
import Search from "./Search/Search"

export default function Header() {
	return (
		<header className="content">
			<Link to="/">
				<img src="./img/pizza-logo.png" className="logo" />
				<span className="title">React Pizza</span>
			</Link>
			<Search />
			<Link to="/cart" className="cart">
				<img src="./img/cart.png" />
				<span className="total">100$</span>
				<span className="number">3</span>
			</Link>
		</header>
	)
}
