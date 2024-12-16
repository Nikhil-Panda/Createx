const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
// 	res.render('index', {
// 		meta: {
// 			data:{
// 				title: 'Createx',
// 				description: 'Creatively animated website'
// 			}
// 		}
// 	});
// });
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('pages/home');
});

app.get('/about', (req, res) => {
	res.render('pages/about');
});

app.get('/detail/:id', (req, res) => {
	res.render('pages/detail');
});

app.get('/collections', (req, res) => {
	res.render('pages/collections');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
