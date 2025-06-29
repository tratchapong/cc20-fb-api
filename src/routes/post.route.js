import express from 'express'
const postRoute = express.Router()
import * as postController from '../controllers/post.controller.js'

postRoute.get('/', postController.getAllPosts)
postRoute.post('/', postController.createPost)
postRoute.put('/:id', postController.updatePost)
postRoute.delete('/:id', postController.deletePost)

export default postRoute