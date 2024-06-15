const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const userController = require("../Controllers/user");

cloudinary.config({
  cloud_name: "dnui8rzbe",
  api_key: "156363782471473",
  api_secret: "UoQyguOQTxiMg-RU2iSJgpTkiFM",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

// Endpoint để lấy danh sách người dùng từ MongoDB
router.get("/api/admin/users", userController.users);
// Định nghĩa các route
router.delete("/api/data/:id", userController.deleteData);
// API endpoint để đăng ký người dùng
router.post(
  "/api/register",
  upload.array("images", 2),
  userController.register
);

// router.get("/export", userController.Export);

router.delete("/api/delete-all", userController.DeleteAll);
router.get("/api/search/:cccd", userController.Search);
// Endpoint API để cập nhật thông tin đăng ký
router.put("/api/updata/:cccd", userController.updataData);
// router.post("/api/register",upload.single('image'), userController.register)
// Endpoint để gửi tin nhắn SMS
router.post("/api/admin/sendSMS", userController.sendSMS);
router.post("/tinh", userController.addTinh);

module.exports = router;
