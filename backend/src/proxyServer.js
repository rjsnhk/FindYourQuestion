const express = require('express');
const cors = require('cors');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const port = process.env.PORT || 4000;

const PROTO_PATH = __dirname + '/search.proto';

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const searchProto = grpc.loadPackageDefinition(packageDefinition).SearchService;
const client = new searchProto('localhost:50051', grpc.credentials.createInsecure());

app.post('/api/search', (req, res) => {
  const { query } = req.body;

  client.search({ query }, (err, response) => {
    if (err) {
      console.error('Search error:', err);
      res.status(500).send('Search failed');
    } else {
      res.json(response);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
