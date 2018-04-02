const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");

const compiler = webpack(webpackConfig);
const devMiddleware = webpackMiddleware(compiler, {
  publicPath: '/',
  contentBase: './src',
  stats: {
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

const app = express();
const publicPath = path.join(__dirname, "public");
const port = process.env.PORT || 9000

app.use(express.static(publicPath));
app.use(devMiddleware);

const navItems = [
  {id : "home", path: '/', label: "Home", icon: "px-fea:home"}, 
  {id : "dashboard", path: '/dashboard', label: "Dashboard", icon: "px-fea:dashboard"},
  {id : "about", path: '/about', label: "About", icon: "px-fea:catalog"},
  {id : "topics", path: '/topics', label: "Topics", icon: "px-fea:log"},
  {id : "users", path: '/users', label: "Users", icon: "px-fea:users"}
];

const dashboardData = {
  keyVals: [
    {label: 'New Alerts', value: 21},
    {label: 'Utilization', value: '70', uom: '%'},
    {label: 'Faults', value: 3},
    {label: 'Output', value: 53, uom: 'mw'}
  ],
  cards: [
    { id: 1, title: 'Card 1', children: [ '<div>Lorem ipsum dolor sit</div>' ] },
    { id: 2, title: 'Card 2', children: [ '<div>Lorem ipsum dolor sit</div>' ] },
    { id: 3, title: 'Card 3', children: [ '<div>Lorem ipsum dolor sit</div>' ] }
  ]
};


const Chance = require('chance');
const chance = new Chance();
function makeRows(count = 100){
	let items = [];
	while(count--){ 
		items.push({
      id: chance.guid(),
      name: chance.name(),
      email: chance.email(),
      avatar: chance.avatar(),
      twitter: chance.twitter(),
      address: chance.address(),
      city: chance.city(),
      state: chance.state(),
      zip: chance.zip(),
      phone: chance.phone(),
      company: chance.company()
    });
	}
	return items;
}

app.get('/api/data?', (req, res) =>{
  res.status(200).send(makeRows(req.query.count || 100));
});

app.get('/api/nav', (req, res) =>{
  res.status(200).send(navItems);
});

app.get('/api/dashboard', (req, res) =>{
  res.status(200).send(dashboardData);
});



app.get('*', function response(req, res) {
    res.write(devMiddleware.fileSystem.readFileSync(path.join(__dirname, './public/index.html')));
    res.end();
  });





const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
console.log('CPUS', numCPUs);
/*
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    console.log('Fork', i);
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
  
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  

  http.createServer(app).listen(port, () =>{
    console.log(`Worker ${process.pid} started`);
  });
}
*/
http.createServer(app).listen(port, () =>{
    console.log(`Worker ${process.pid} started`);
  });