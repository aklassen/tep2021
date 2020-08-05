
var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('short'))

app.use(express.static('./dist/hochzeit2021'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/hochzeit2021/'}
);
});

const port = process.env.PORT || 8080;
app.listen(port, serverStarted);

function serverStarted () {
  console.log('Server started', port);
  console.log('Press Ctrl+C to exit...\n');
}
