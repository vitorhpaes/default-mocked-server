import jsonServer from 'json-server'
import database from './mock/database'
const server = jsonServer.create()
const router = jsonServer.router(database)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3334, () => console.log('mocked server is running'))


