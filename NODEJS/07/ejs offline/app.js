const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Blog = require("./models/blog");
const { log } = require("handlebars");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const dbURI = "mongodb://localhost:27017/nodejs-app";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db");
    const PORT = 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/guides", (req, res) => {
  res.render("guides", { title: "Guides" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs", { blogs: result, title: "Blogs" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("500", { title: "Server Error" }); // Handle server error
    });
});

app.get("/create-blog", (req, res) => {
  res.render("create_blog", { title: "Create a new blog" });
});

app.post("/blogs", urlencodedParser, (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body
  });

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("500", { title: "Server Error" }); // Handle server error
    });
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Fetching blog with id: ${id}`);
  Blog.findById(id)
    .then((result) => {
      if (!result) {
        console.log(`No blog found with id: ${id}`);
        return res.status(404).render("404", { title: "Blog Not Found" });
      }
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(`Error fetching blog with id: ${id}`, err);
      res.status(500).render("500", { title: "Server Error" }); // Handle server error
    });
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error deleting blog'); // Handle server error
    });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// Sandbox route // Sandbox Route
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