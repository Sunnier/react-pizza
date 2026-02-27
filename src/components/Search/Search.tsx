// @ts-nocheck

import searchIcon from "@assets/img/searchicon.svg"
import searchClear from "@assets/img/searchclear.svg"
import styles from "./Search.module.scss"
import { useContext } from "react"

import { SearchContext } from "../../App"
export default function Search() {
	const { searchValue, setSearchValue } = useContext(SearchContext)
	return (
		<div className={`${styles.search} search`}>
			<img className={styles.icon} src={searchIcon} />{" "}
			<input
				placeholder="Search..."
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>{" "}
			<img className={styles.clear} src={searchClear} />
		</div>
	)
}
