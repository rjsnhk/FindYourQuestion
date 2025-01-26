const mongoose = require('mongoose');
const fs = require('fs');
const { ObjectId } = require('mongodb');

mongoose
  .connect('mongodb+srv://nahakrajesh3:nahakrajesh3@rjsnhk.ejhqj.mongodb.net/speakxquestion', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection established'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

const questionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  type: String,
  anagramType: String,
  blocks: [String],
  options: [String],
  solution: String,
});

const Question = mongoose.model('Question', questionSchema);

const rawData = fs.readFileSync('questions.json', 'utf8');
const questionData = JSON.parse(rawData);

const formattedData = questionData.map((question) => ({
  ...question,
  _id: new ObjectId(question._id.$oid),
  siblingId: question.siblingId ? new ObjectId(question.siblingId.$oid) : null,
}));

async function populateDatabase() {
  try {
    await Question.insertMany(formattedData);
    console.log('Data successfully added to the database');
  } catch (error) {
    console.error('Error occurred while adding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

populateDatabase();
