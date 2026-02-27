// @ts-nocheck
import styles from "./Pagination.module.scss"
import { usePagination } from "@mantine/hooks"

type PaginationProps = {
	currentPage: number
	onChangePage: (page: number) => void
}
const totalPages = 3
const LeftArrow = () => (
	<svg
		width="16"
		height="16"
		viewBox="1 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="4"
		strokeLinecap="round"
		strokeLinejoin="round">
		<path d="M15 18l-6-6 6-6" />
	</svg>
)
const RightArrow = () => (
	<svg
		width="16"
		height="16"
		viewBox="-1 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="4"
		strokeLinecap="round"
		strokeLinejoin="round">
		<path d="M9 18l6-6-6-6" />
	</svg>
)

export default function Pagination({ currentPage, onChangePage }) {
	const pagination = usePagination({
		total: totalPages,
		page: currentPage,
		onChange: onChangePage,
		siblings: 1,
	})
	return (
		<div className={styles.pages}>
			<button
				onClick={pagination.previous}
				disabled={pagination.active === 1}
				// className={styles.arrow}
			>
				<LeftArrow />
			</button>
			{pagination.range.map((page, index) => (
				<button
					className={pagination.active === page ? styles.active : ""}
					key={page}
					onClick={() => pagination.setPage(page)}
					data-content={page}>
					{page}
				</button>
			))}
			<button
				onClick={pagination.next}
				disabled={pagination.active === totalPages}
				//className={styles.arrow}
			>
				<RightArrow />
			</button>
		</div>
	)
}
