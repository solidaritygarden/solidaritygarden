export default function handler(req, res) {
	// Get data submitted in request's body.
	const body = req.body;

	console.log('body: ', body);

	// Guard clause checks for name and email,
	// and returns early if they are not found
	if (!body.firstName || !body.lastName) {
		// Sends a HTTP bad request error code
		return res.status(400).json({ data: 'Name and/or email not found!' });
	}

	res.status(200).json({ data: `${body.firstName} ${body.lastName}` });
}
