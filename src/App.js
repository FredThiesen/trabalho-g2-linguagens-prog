import musk from "./assets/elon-musk-bw.png"
import "./App.css"
import React, { useState } from "react"
import {
	base64Computer,
	base64Television,
	base64Oven,
	base64Headphone,
	base64Fridge,
} from "./mock"

const mockImages = [
	base64Computer,
	base64Television,
	base64Oven,
	base64Headphone,
	base64Fridge,
]

function App() {
	const [product, setProduct] = useState(null)
	const handleFetchProduct = () => {
		// fetch("https://api.github.com/users/elonmusk")
		// 	.then((response) => response.json())
		// 	.then((data) => setProduct(data))
		setProduct({
			image: base64Computer,
		})
	}
	const handleNextProduct = () => {
		// rotate through mockImages
		const index = mockImages.indexOf(product.image)
		let nextIndex = index + 1

		if (nextIndex > mockImages.length - 1) {
			nextIndex = 0
		}
		const nextImage = mockImages[nextIndex]
		setProduct({
			image: nextImage,
		})

		// const nextImage = mockImages.filter(
		// 	(image) => image !== product.image[0]
		// )
		// setProduct({ image: nextImage })
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-top-container">
					<img src={musk} className="App-logo" alt="logo" />
					<button onClick={handleFetchProduct}>Buscar Produto</button>
				</div>
				<div className="App-product-container">
					{product && (
						<div className="Product-container">
							<img src={product.image} />
							<button onClick={handleNextProduct}>
								Próximo produto
							</button>
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
