const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const mongoose = require('mongoose');

const PROTO_PATH = __dirname + '/search.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const searchProto = grpc.loadPackageDefinition(packageDefinition).SearchService;

mongoose
  .connect('mongodb+srv://nahakrajesh3:nahakrajesh3@rjsnhk.ejhqj.mongodb.net/speakxquestion', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection failed:', err));

const Question = mongoose.model(
  'Question',
  new mongoose.Schema({
    title: String,
    type: String,
    anagramType: String,
    blocks: [String],
    options: [String],
    solution: String,
  })
);

async function search(call, callback) {
  const { query, type } = call.request;  

  try {
    
    const filter = { title: new RegExp(query, 'i') };
    
    if (type) {
      filter.type = type;  
    }

    const questions = await Question.find(filter);
    callback(null, { questions });
  } catch (err) {
    console.error('Error searching questions:', err);
    callback(err, null);
  }
}



const server = new grpc.Server();
server.addService(searchProto.service, { search });

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Server startup error:', err);
  } else {
    console.log(`Server is running on http://0.0.0.0:${port}`);
    server.start();
  }
});
