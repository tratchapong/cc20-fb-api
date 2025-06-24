import prisma from '../config/prisma.config.js'
import createError from '../utils/create-error.util.js'

export async function register(req, res, next) {
	res.json({
		msg: 'Register controller',
		body: req.body
	})
}

export const login = (req, res, next) => {
	res.json({
		msg: 'Login controller',
		body: req.body
	})
}

export const getMe = async (req, res, next) => {
	let numUser = await prisma.user.count()
	console.log(numUser)
	createError(403, "Block!!")
	res.json({ msg: 'Get me controller', numUser })
}