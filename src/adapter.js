

const Adapter =  {
  getAll: function getAll(authorId) {
    return fetch(`http://localhost:3000/authors/${authorId}?_embed=blogPosts`)
      .then((response) => response.json())
  },

  getComments: function getComments(blogPostId) {
    return fetch(`http://localhost:3000/blogPosts/${blogPostId}?_embed=comments`)
      .then((response) => response.json())
  },

  destroyStuff: function destroy(id) {
    let options = { method: 'DELETE' }
    return fetch(`${baseUrl}/${id}`, options)
      .then((response) => response.json())
  }
}
