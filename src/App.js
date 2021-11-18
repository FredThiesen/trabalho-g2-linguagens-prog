import musk from "./assets/elon-musk-bw.png"
import "./App.css"
import React, { useState, useEffect } from "react"
import {
	base64Computer,
	base64Television,
	base64Oven,
	base64Headphone,
	base64Fridge,
} from "./mock"
import fetchProductsRequest from "./request"

const mockImages = [
	base64Computer,
	base64Television,
	base64Oven,
	base64Headphone,
	base64Fridge,
]

function App() {
	const [product, setProduct] = useState(null)
	const [productList, setProductList] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const handleFetchProduct = async () => {
		setIsLoading(true)
		const res = await fetchProductsRequest()
		setProductList(res)
		setProduct(res[0])
		setIsLoading(false)
	}

	useEffect(() => {
		console.log("productList", productList)
	}, [productList])

	const handleNextProduct = () => {
		// rotate through mockImages
		const index = productList.indexOf(product)
		let nextIndex = index + 1

		if (nextIndex > productList.length - 1) {
			nextIndex = 0
		}
		const nextProduct = productList[nextIndex]
		setProduct(nextProduct)

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
					{isLoading && <div className={"loading"} />}
					{productList && (
						<div className="Product-container">
							<div className={"Product-column"}>
								{/* <img src={product.image} /> */}
								<button onClick={handleNextProduct}>
									Próximo produto
								</button>
							</div>
							{product && (
								<div className={"Product-column"}>
									Produto: {product.name}
									<br />
									Preço: R$ {product.price}
									<br />
								</div>
							)}
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
