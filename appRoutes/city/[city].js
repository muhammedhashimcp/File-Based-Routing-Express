export const handler= (req, res) => {
	const { city } = req.params
	return `City name is: ${city}`
}