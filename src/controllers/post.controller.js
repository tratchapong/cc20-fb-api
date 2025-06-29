export async function getAllPosts(req, res, next) {

  res.json({message : "Get all posts"})
}

export async function createPost(req, res, next) {

  res.json({message: "Create post"})
}

export async function updatePost(req, res, next) {

  res.json({message: "Update Post"})
}

export async function deletePost(req, res, next) {

  res.json({message: "Delete Post"})
}