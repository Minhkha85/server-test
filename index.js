const express = require("express");
const { google } = require("googleapis");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./Routers/user");
const DataModel = require("./Models/UserSchema");
require("dotenv").config();

const app = express();

// Sử dụng CORS middleware
app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
// Middleware để nhận dữ liệu từ React
app.use(express.json());

// app.get('*',function(req,res){
//     res.sendFile(__dirname + '/public/views/index.html');
// });   // * means any route.

const PORT = 9999;

const https = require('https');
const fs = require('fs');
const app = require('./app'); // Import ứng dụng Node.js của bạn

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/server.vietlonghung.com.vn/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/server.vietlonghung.com.vn/fullchain.pem'),
};

https.createServer(options, app).listen(443, () => {
  console.log('Server is running on https://yourdomain.com');
});
// Google Sheets setup
const sheets = google.sheets("v4");
const auth = new google.auth.GoogleAuth({
  keyFile: "./vietlonghung-04e7582188c7.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = "1KY5mBRfm-O37ajuPxWeh4A-u4Tj1sahM7CtpXD227nY";

// Route to export data
app.get("/export", async (req, res) => {
  try {
    const data = await DataModel.find();
    const authClient = await auth.getClient();
    const sheetData = data.map((item) => Object.values(item._doc));

    await sheets.spreadsheets.values.update({
      auth: authClient,
      spreadsheetId,
      range: "Sheet1!A2",
      valueInputOption: "RAW",
      resource: {
        values: sheetData,
      },
    });

    res.status(200).send("Data exported successfully!");
  } catch (error) {
    res.status(500).send("Error exporting data: " + error.message);
  }
});

// mongoose
//   .connect(process.env.MONGODB)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(process.env.PORT, "192.168.1.253", () => {
//       console.log("http://192.168.1.253" + process.env.PORT);
//     });
//   })
//   .catch((err) => console.error("Failed to connect to MongoDB:", err));

mongoose
  .connect("mongodb+srv://huynguyen030704:Huynguyen2004@cluster0.xdzqfz6.mongodb.net/test")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, "171.244.39.87", () => {
      console.log("http://171.244.39.87" + PORT);
    });
    // app.listen(process.env.PORT);
    console.log("Hello" + process.env.PORT);
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
