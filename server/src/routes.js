const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.register,
    AuthenticationControllerPolicy.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)
}