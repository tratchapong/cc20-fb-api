import multer from 'multer'
import path from 'path'

// console.log('upload: ',import.meta.url)
// console.log(process.cwd())
// console.log(path.join(process.cwd(), 'temp-pic'))

const dest = path.join(process.cwd(), 'temp-pic')

const storage =  multer.diskStorage({
	destination : (req, file, cb) => cb(null, dest),
	filename : (req, file, cb) => {
		console.log(file.originalname)
		console.log(path.extname(file.originalname))
		let fileExt = path.extname(file.originalname)
		cb(null, `pic_${Date.now()}_${Math.round(Math.random()*100)}${fileExt}`)
	}
})

export default multer({storage })

// export default multer({ dest })