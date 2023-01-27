const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
const DB = process.env.DATABASE;
mongoose.set('strictQuery', false);
mongoose.connect(DB, {useNewUrlParser: true})
.then(()=>console.log("Db is connected"))
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
