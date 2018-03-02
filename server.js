const express = require('express');
const data = require('./data/questions');

const app = express();
app.use((req, res, next)=>{
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Credentials', 'true')
		res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
		res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
		next()
	})
app.get('/api/customers', (req, res) => {
  res.json(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);