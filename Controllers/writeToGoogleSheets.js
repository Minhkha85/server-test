const { google } = require("googleapis");
const fetchMongoData = require("../index"); // Đường dẫn đến file chứa hàm fetchMongoData
const keys = require("../vietlonghung-04e7582188c7.json"); // Đường dẫn đến file JSON của bạn

async function writeToGoogleSheets() {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  client.authorize((err, tokens) => {
    if (err) {
      console.error("Error authorizing client:", err);
      return;
    } else {
      console.log("Client authorized");
      updateSheet(client);
    }
  });
}

async function updateSheet(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  const data = await fetchMongoData();

  const resource = {
    values: data.map((item) => Object.values(item)),
  };

  const spreadsheetId = "1KY5mBRfm-O37ajuPxWeh4A-u4Tj1sahM7CtpXD227nY"; // Thay bằng ID của Google Sheets của bạn
  const range = "Sheet1!A1"; // Thay bằng range bạn muốn cập nhật

  sheets.spreadsheets.values.update(
    {
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource,
    },
    (err, result) => {
      if (err) {
        console.error("Error updating Google Sheets:", err);
      } else {
        console.log("Google Sheets updated:", result);
      }
    }
  );
}

module.exports = writeToGoogleSheets;
