module.exports = (app) => {
	app.post('/register', (req, res) => {
	  res.send({
	    message: `Hello ${req.body.email}! You are registered! Have fun!`
	  })
	})
}