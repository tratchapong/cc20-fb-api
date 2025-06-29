import path from 'path'
import fs from 'fs/promises'
import cloudinary from "../config/cloudinary.config.js"

export async function getAllPosts(req, res, next) {

  res.json({ message: "Get all posts" })
}

export async function createPost(req, res, next) {

  console.log(req.file)
  let uploadResult = null
  if (req.file) {
    uploadResult = await cloudinary.uploader.upload(req.file.path, {
      overwrite: true,
      public_id: path.parse(req.file.path).name
    })
  }
  console.log(uploadResult)
  fs.unlink(req.file.path).then(console.log('deleted file from local'))
  res.json({ message: "Create post", file: req.file, uploadResult })
}

export async function updatePost(req, res, next) {

  res.json({ message: "Update Post" })
}

export async function deletePost(req, res, next) {

  res.json({ message: "Delete Post" })
}