const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler=require('./middleware/error');

//routes imported
const authRoutes=require('./routes/authRoutes');
const userRoutes=require('./routes/userRoutes');
const jobTypeRoute=require('./routes/jobTypeRoutes');
const jobsRoute=require('./routes/jobsRoutes');

//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));



//MIDDLEWARE

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

app.use(cookieParser());
app.use(cors());


//ROUTES
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',jobTypeRoute);
app.use('/api',jobsRoute);



//error middleware
app.use(errorHandler);






const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
