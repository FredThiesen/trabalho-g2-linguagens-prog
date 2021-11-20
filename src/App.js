import musk from "./assets/elon-musk-bw.png"
import "./App.css"
import React, { useState, useEffect } from "react"
import fetchProductsRequest from "./request"

function App() {
	const [product, setProduct] = useState(null)
	const [productList, setProductList] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const handleFetchProduct = async () => {
		setIsLoading(true)
		const res = await fetchProductsRequest()
			.then((res) => {
				setProductList(res)
				setProduct(res[0])
				setIsLoading(false)
			})
			.catch((err) => console.log(err))
		return res
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
	}
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-top-container">
					<img src={musk} className="App-logo" alt="logo" />
					<button onClick={handleFetchProduct}>
						Buscar Produtos
					</button>
				</div>
				<div className="App-product-container">
					{isLoading && <div className={"loading"} />}
					{productList && (
						<div className="Product-container">
							<div className={"Product-column"}>
								{product && (
									<img
										src={
											"data:image/png;base64," +
											product.photo
										}
										width="200px"
									/>
								)}
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
