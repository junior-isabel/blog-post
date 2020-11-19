

module.exports = {

  async Index (req, res) {
    const { Post } = req.models
    const posts = await Post.findAll({
      order: [['id', 'DESC']]
    })
    return res.render('index', {
      title: 'HomePage',
      posts
    })
  },
  async Show (req, res) {
    const { Post } = req.models
    const {id } = req.params
    const post = await Post.findOne({
      where: {
        id: id
      }
    })

    return res.render('index', {
      title: 'Show Post',
      posts: [post]
    })
  }
}