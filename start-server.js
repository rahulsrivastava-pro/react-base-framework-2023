/*
 * This express server just sends back the index.html page so we can use HTML5 history from the SPA client
 */

const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

//app.use(express.static(__dirname + '/public'));


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Routes
app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' })
})

/*
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
*/

app.listen(port);

console.log('Server is ready at:');
console.log('---------------------');
console.log('http://localhost:' + port);
console.log('---------------------\n');
console.log('After an edit/save of a source file, please refresh your browser:\n');
