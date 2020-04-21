const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("we successfully connected!");
})

let repoSchema = mongoose.Schema({
});

let Repo = mongoose.model('Repo', repoSchema);


var save = () {

}

module.exports.save = save;