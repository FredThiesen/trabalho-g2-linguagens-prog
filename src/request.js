export default async function fetchProductsRequest() {
	const response = await fetch(`https://trab-g2.herokuapp.com/products`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		//   body: JSON.stringify({})
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error(error)
		})
	return response
}
