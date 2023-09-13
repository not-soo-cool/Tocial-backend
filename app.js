const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');


if(process.env.NODE_ENV !== "production") {
    require("dotenv").config({path:"config/config.env"});
}

// const allowedOrigins = ['http://localhost:3000', 'https://tocial.netlify.app'];

// const corsOptions = {
//     origin: function (origin, callback) {
//       if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   };

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));


//Using middlewares
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
// app.use(cors({ origin: 'https://tocial.netlify.app' }));
// app.use(cors());

// Importing routes
const user = require("./routes/user");
const post = require("./routes/post");

// Using routes
app.use("/api/v1", user);
app.use("/api/v1", post);


module.exports = app;
