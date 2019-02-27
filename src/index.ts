import Server from './server/server'
import Pagina from './router/pagina'
import Mensaje from './router/mensaje'

const server = Server.init(3000)

server.app.use('/mensaje',Mensaje)
server.app.use('/',Pagina)

server.start(()=>console.log("servidor iniciado"))  