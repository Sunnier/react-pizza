import styles from "./NotFoundBlock.module.scss"
export default function NotFoundBlock() {
	return (
		<div className={styles.root}>
			<span>404</span>
			<p>Page not Found</p>
		</div>
	)
}
