import express from 'express'
import * as rooms from './controllers/rooms'

const routes = express.Router()

routes.post('room/create', rooms.createRoom)

export default routes