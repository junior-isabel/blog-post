
module.exports = {

  async Store (req, res) {

    const { Post } = req.models
    const { titulo, texto } = req.body
    const post = await Post.create({
      titulo,
      texto
    })
    return res.redirect(200, '/')
  } 
}