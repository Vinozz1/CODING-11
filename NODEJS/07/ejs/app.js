const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Blog = require('./models/blog');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const dbURl = 'mongodb+srv://jonathanalvino14:Alvino09@node-app.rezwo.mongodb.net/?retryWrites=true&w=majority&appName=node-app';
mongoose.connect(dbURl)
  .then(() => {
    console.log('Connected to DB');
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt : -1})
    .then( result => {
      res.render('index', {blogs: result, title: 'All blogs'});
    })
    .catch()
})

app.post('/blogs', urlencodedParser, (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      console.log('Blog created:', result); // Log blog creation
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
});

// Sandbox Route
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
      title: 'new blog 4',
      snippet: 'about my new blog',
      body: 'more about my new blog'
  })
 
  blog.save()
      .then(result => {
      res.send(result);
      })
      .catch(err => {
      console.log(err);
      });
});

app.get('/add-blogs', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.post('/add-blogs', urlencodedParser, (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body
  });

  newBlog.save()
    .then(() => res.redirect('/blogs'))
    .catch(err => {
      console.log(err);
      res.status(500).send('Server error');
    });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
      res.status(404).render('404', { title: 'Blog Not Found' });
    });
});

app.get('/about', (req, res) => {
  Blog.find().sort({ createdAt: -1 }).limit(2)
    .then(result => {
      console.log('Latest blogs:', result); // Log the fetched blogs
      res.render('about', { 
        title: 'About', 
        latestBlogs: result 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Server error');
    });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});