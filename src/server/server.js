const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { 
  getPosts,
  addPost,
  removePost,
  updatePost,
} = require('./posts')

console.log('server')

app.use( (req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'content-type')
  res.set('Access-Control-Allow-Methods', 'DELETE, PATCH')
  next();
})

app.get('/api/posts', (req, res) => {
  res.json(getPosts());
});

app.post('/api/posts', bodyParser.json(), (req, res) => {  
  addPost(req.body.title);
  const newPost = getPosts();
  res.json(addPost[newPost.length - 1]);
});

app.delete('/api/posts/:postId', (req, res) => {  
  removePost(req.params.postId);

  res.json({ status: 'success'});
});

app.patch('/api/posts/:postId', bodyParser.json(), (req, res) => {  
  updatePost(req.params.postId, req.body.params);

  res.json({ status: 'success'});
});

// app.use(express.static('build'))

app.listen(port, () => {
  console.log(`start on ${port}`)
})