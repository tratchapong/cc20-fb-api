import path from 'path'
import cloudinary from "../config/cloudinary.config.js"

export const getAllPosts = async (req,res,next) => {

	res.json({message: 'Get all posts'})
}

export const createPost = async (req,res,next) => {
	const {message} = req.body
	console.log(req.file)
	let haveFile = !!req.file
	let uploadResult = null
	if(haveFile) {
		uploadResult = await cloudinary.uploader.upload(req.file.path),{
			overwrite : true,
			public_id : path.parse(req.file.path).name
		}
	}
	console.log(uploadResult)
	res.json({
		message: 'Create post',
		file : req.file,
		uploadResult
	})
}

export const updatePost = async (req, res, next) => {

	res.json( {message: 'Update post'})
}

export const deletePost = async (req, res, next) => {

	res.json( {message: 'Delete post'})
}