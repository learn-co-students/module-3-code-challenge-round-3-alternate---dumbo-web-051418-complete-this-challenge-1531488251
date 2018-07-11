# JavaScript Code Challenge

## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- Fetching from APIs

## Instructions

Today we're building BlogN, an app for blogging.

A BlogN user will be able to do the following things:

  - As a user, when the page loads I will see a blank page with a dropdown menu listing current blog authors.

  - As a user, when I select a blog author from a dropdown menu, I will see a title for all their blog posts.

  - As a user, when I click on a blog post title, I will view all the comments for that blog post.

  - As a user, when I click on a delete button for a comment, it should delete the comment.

## Functionality demo
  [Example](./animated_challenge_example.gif "Example Functionality")

Please look at the starter code in `index.html` before you begin, so you don't recreate code that already exists there.

For an example of what your resulting HTML should look like, view `examplePage.html` for a hard-coded example. Your page should be dynamic, though!

## The API

Instead of actually accessing the data from a remote API, this challenge uses a package called [json-server](https://github.com/typicode/json-server) to create a fake API for development and testing.

It is very easy to set-up.

1 - Run the command `npm install -g json-server` in the command line from this directory

2 - Run  `json-server --watch db.json`

That's it. You will have a server running on `localhost:3000` that serves the JSON data contained in the `db.json` file.

*Troubleshooting: If this fails, be sure you don't already have something running on port 3000*


## Deliverables and How to Approach

For this challenge it is important to work iteratively, one feature at a time, before moving on to the next. You should **prioritize making code that works over attempting all of the deliverables.**

We have provided what we believe to be a good breakdown of how to approach the this problem.

### Step 1 - Get Blog Posts for a Single Blog

When an author is selected from the dropdown, make a Fetch request to retrieve all their blog posts. If you aren't sure how to listen for a dropdown change event, try reading documentation on [W3 Schools](https://www.w3schools.com/jsref/event_onchange.asp) or [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/change).

#### API Docs
#### Endpoint to show an author's blog posts
```
GET 'http://localhost:3000/authors/1?_embed=blogPosts'

This request returns all the blog posts for an author with ID 1. You must dynamically make this request to the correct author id whenever an author is selected from the dropdown.

Example Response:
{
  "name": "May Cheung",
  "id": 1,
  "blogPosts": [
    {
      "title": "May's Mind Your Manners",
      "authorId": 1,
      "id": 1
    }, {
      "title": "May's Tips on How to Listen Well",
      "authorId": 1,
      "id": 5
    }
  ]
}
```

Use the data from the API response to append the information to the DOM. You will need to add to the author-container:

- the blog name
- the author's name
- the title for each blog entry

Please open `examplePage.html` in your browser to view a hard-coded example.

(If you cannot get your fetch request to work correctly you can always use the example response above to append content to the DOM and work with for the subsequent steps.)

### Step 2 - Get Comments for a Single Blog Post

When a user clicks on a blog post, make a Fetch request to retrieve all the comments for that blog post.

#### API Docs
#### Endpoint to show a blog post's comments
```
GET 'http://localhost:3000/blogPosts/1?_embed=comments'

This request returns all the comments with a blogPost id of 1. You must dynamically make this request to the correct blogPost id whenever a blog post title is clicked on.

Example Response:
{
  title: "May's Mind Your Manners",
  authorId: 1,
  id: 1,
  comments: [
    {
      content: "first comment!",
      blogPostId: 1,
      id: 1
    }, {
      content: "Oooh, thanks for sharing!",
      blogPostId: 1,
      id: 2
    }, {
      content: "So helpful!",
      blogPostId: 1,
      id: 3
    }, {
      content: "The best I've read in ages <3",
      blogPostId: 1,
      id: 4
    }
  ]
}
```

Use the data from the API response to append the information to the DOM. You will need to add the comment content to the comment-container:

### Step 3 - Delete Comments

When a user clicks on a button next to a comment, a request should be sent to delete that comment. (This is a very heavily moderated blog site. We all have delete power!)

This app will use what is called *optimistic rendering*. This means the DOM will be updated before the changes are added to the database.  When a user clicks the 'delete' button, we will immediately update the DOM.  Next your job is to make a DELETE request to remove the comment from the database.

#### API Docs
#### Endpoint to delete a comment
```
DELETE 'http://localhost:3000/comments/1'

This request deletes the comment with id 1. You must dynamically make this request to the correct comment id whenever a comment delete button is clicked on.

To confirm if the comment was deleted, try to view it at `http://localhost:3000/comments/:id`. A deleted comment will return `{}`


