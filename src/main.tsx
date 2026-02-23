import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router"
import Home from "./components/Home.tsx"
import NotFound from "./components/NotFound.tsx"
import Cart from "./components/Cart.tsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{ path: "cart", element: <Cart /> },
			{ path: "*", element: <NotFound /> },
		],
	},
])

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
