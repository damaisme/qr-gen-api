const express = require('express');
const bodyParser = require('body-parser');
const {generate} = require('./utils/generate.js');

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', function(req, res){
	res.send("Welcome to simple QR app, to generate QR use http post /api/generate with url as a parameter");
});

app.get('/api/download',function(req,res){
	res.download(req.query.file_path);
})

app.post('/api/generate', async function(req, res){
	const url = req.query.url;
	console.log(url);
	if(url){
		res.send(await generate(url));
	}else{
		res.send('URL Not Set!');
	}

});


app.listen(3000,function(){
	console.log('Server listing on 3000');
});
