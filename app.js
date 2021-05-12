const express = require('express');
const app = express();
const port = 3000;
const controllers = require('./controllers/map')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use ('/', controllers.viewMap);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})