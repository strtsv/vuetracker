const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.register,
    AuthenticationControllerPolicy.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs', SongsController.index)
  app.post('/songs', SongsController.post)
  app.get('/songs/:songId', SongsController.show)
  app.put('/songs/:songId', SongsController.put)
}
