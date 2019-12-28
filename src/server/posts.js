
const uuid = require('uuid/v1')

let listPost = [
  {
    id: '1',
    title: 'title1',
    like: false,
  },
  {
    id: '2',
    title: 'title2',
    like: false,
  },
]

const getPosts = () => {
  return listPost;
}

const addPost = (title) => {
  listPost = [...listPost, {
    id: uuid(),
    title: title,
    like: false,
  }]
  return listPost.length;
}

const removePost = (postId) => {
  listPost = listPost.filter( todo => todo.id !== postId)
}

const updatePost  = (postId, params) => {
  listPost = listPost.map(todo =>
    todo.id !== postId
      ? todo
      : {
          ...todo,
          ...params,
        }
  );
}

module.exports = {
  getPosts,
  addPost,
  removePost,
  updatePost,
};