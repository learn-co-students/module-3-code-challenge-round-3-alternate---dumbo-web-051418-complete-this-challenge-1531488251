document.addEventListener('DOMContentLoaded', () => {

const authorSelect = document.querySelector('#author-select')
console.log(authorSelect)
authorSelect.addEventListener('change', chooseBlogger)
const selectMenu = document.querySelector('#select-menu')


function chooseBlogger(event) {
console.log(event)
let authorId;
if (event.target.value === '1') {
  authorId = 1
} else if  (event.target.value === '2') {
  authorId = 2
} else  if (event.target.value === '3') {
    authorId = 3
} else {
  authorId = 4
}

Adapter.getAll(authorId)
.then(myJson => {
console.log(myJson)
const authorContainer = document.querySelector('#author-container')
const blogName = document.querySelector('#blog-name')
const authorName = document.querySelector('#author-name')
const blogContainer = document.querySelector('#blog-container')
authorName.innerHTML = myJson.name
blogName.innerHTML = myJson.blogName
blogContainer.innerHTML = ''
myJson.blogPosts.forEach(function (blogPostings) {
  blogContainer.innerHTML += `<li> ${blogPostings.title} </li>`
})
})
const commentContainer = document.querySelector('#comment-container')
commentContainer.addEventListener('click', getBlogComments)


function getBlogComments(event) {
console.log(event)
let blogPostId = event.target.event.id
Adapter.getComments(blogPostId)
.then(console.log)
}
}

})

// need to put event listener on the indiv posts so that can listen to indiv one
// then need to get the comments to that post , which are probably an array
// iterate through those so they can be displayed on the page

// need to put event listener on each (click) on each comment so that they can be deleted
// they need to have ids dataset id so the right one can be associated and it can be deleted in the database
