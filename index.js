const express = require('express')

const app = express();

const PORT = 3000;

app.use(express.json());


app.get('/', function(req, res){
	res.status(200).send(`<h1>Home Page</h1>`)
})


app.get('/health-check', function(req, res){
	res.status(200).send(`<h1>Health Check Successful</h1>`)
})


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})