const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
    });
});

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: "About",
//     });
// });
// app.get('/news', (req, res) => {
//     res.render('news', {
//         title: "News",
//     });
// });

app.use((req, res) => {
    res.status(404).send('<h1>404, page not found</h1>')
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server is running on http://127.0.0.1:${PORT}`);
});