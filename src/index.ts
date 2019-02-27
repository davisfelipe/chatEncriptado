import Server from './server/server'
import Router from './router/router'

const server = Server.init(3000)
server.app.use(Router)

server.start(()=>console.log("servidor iniciado"))