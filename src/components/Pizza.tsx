// @ts-nocheck

import { useState } from "react"

const sizes = ["Small", "Medium", "Large"]
const types = ["Traditional", "Thin"]

export default function Pizza(props) {
	const [activeType, setActiveType] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const selectType = (type) => {
		setActiveType(type)
	}
	const selectSize = (size) => {
		setActiveSize(size)
	}
	return (
		<div className={`pizza ${props.loading ? "skeleton" : ""}`}>
			<div className="img">
				{props.img && <img src={`./img/pizzas/${props.img}`} />}
			</div>
			<div className="desc">
				<div className="title">{props?.title}</div>
				<div className="ingredients">{props?.description}</div>

				<div className="choices">
					{props.types && (
						<>
							<ul>
								{props.types.map((type) => (
									<li
										key={type}
										onClick={() => selectType(type)}
										className={activeType === type ? "active" : ""}>
										{types[type]}
									</li>
								))}
							</ul>
							<ul>
								{props.sizes.map((size) => (
									<li
										key={size}
										onClick={() => setActiveSize(size)}
										className={activeSize === size ? "active" : ""}>
										{sizes[size]}
									</li>
								))}
							</ul>
						</>
					)}
				</div>
				<div className="buy">
					<div className="price">
						<span>{props?.prices?.[0]}</span>
					</div>

					<button className="active add">Add</button>
				</div>
			</div>
		</div>
	)
}
