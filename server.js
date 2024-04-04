const dotenv = require('dotenv');
const express = require('express');
const mongoose = require("mongoose");
dotenv.config({path: ".env"})

mongoose.connect(process.env.MONGODB_URI , {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

//configure mongoose from crud app
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/CRUD",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   }
// );

const app = express();
// Body parser
app.use(express.json());
const user = require('./src/routes/userRoute')

app.use('/public', express.static('public'));
//app.use('/public', serveIndex('public'));

app.use("/api/v1/users", user);
app.get('/', (req, res) => {
  console.log(req.body)
  res.send('Successful response.');
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Example app is listening on port ${process.env.PORT}.`));