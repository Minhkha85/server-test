const Tinh = require("../Models/TinhSchame");
const User = require("../Models/UserSchema");
const axios = require("axios");
const writeToGoogleSheets = require("./writeToGoogleSheets");
const cloudinary = require("cloudinary").v2;

// Endpoint để lấy danh sách người dùng từ MongoDB
exports.users = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Đã có lỗi xảy ra khi lấy danh sách người dùng:", error);
    res.status(500).send("Đã có lỗi xảy ra khi lấy danh sách người dùng");
  }
};

cloudinary.config({
  cloud_name: "dnui8rzbe",
  api_key: "156363782471473",
  api_secret: "UoQyguOQTxiMg-RU2iSJgpTkiFM",
});

// API endpoint để đăng ký người dùng
exports.register = async (req, res) => {
  const {
    fullname,
    gender,
    date,
    noisinh,
    cccd,
    ngaycapcccd,
    noicapcccd,
    dantoc,
    tongiao,
    tdhv,
    chuyenmon,
    chuyennganh,
    ngoaingu,
    numberPhone,
    email,
    tinh,
    huyen,
    xa,
    sonha,
    tamtruTinh,
    tamtruHuyen,
    tamtruXa,
    hotench,
    ngaysinhch,
    moiquanhech,
    stk,
    taynghe,
    tttd,
    sothe,
    vtut,
    tomtacbt,
    sdtnt1,
    qhnt1,
    ttnt1,
    sdtnt2,
    qhnt2,
    ttnt2,
    sdtnt3,
    qhnt3,
    ttnt3,
    hotenbr,
    namsinhbr,
    nghenghiepbr,
    choohtbr,
    hotenmr,
    namsinhmr,
    nghenghiepmr,
    choohtme,
    hotencv,
    namsinhcv,
    nghenghiepcv,
    choohtcv,
    hotenc1,
    namsinhc1,
    nghenghiepc1,
    chooc1,
    hotenc2,
    namsinhc2,
    nghenghiepc2,
    hotenc3,
    namsinhc3,
    nghenghiepc3,
    chooc3,
    hotenc4,
    namsinhc4,
    nghenghiepc4,
    chooc4,
    hotenc5,
    namsinhc5,
    nghenghiepc5,
    chooc5,
    hotenbocv,
    namsinhbcv,
    nghenghiepbcv,
    choobcv,
    hotenbmcv,
    namsinhmcv,
    nghenghiepmcv,
    choomcv,
    hotenace1cv,
    namsinhace1cv,
    nghenghiepace1cv,
    chooace1cv,
    hotenace2cv,
    namsinhace2cv,
    nghenghiepace2cv,
    chooace2cv,
    hotenace1,
    namsinhace1,
    nghenghiepace1,
    chooace1,
    hotenace2,
    namsinhace2,
    nghenghiepace2,
    chooace2,
    xacnhan,
  } = req.body;
  try {
    if (!req.files || req.files.length !== 2) {
      return res.status(400).json({ error: "Please upload exactly 2 images" });
    }

    const cloudinaryResponses = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path);
      cloudinaryResponses.push(result.secure_url);
    }

    const newUser = new User({
      fullname,
      gender,
      date,
      noisinh,
      cccd,
      ngaycapcccd,
      noicapcccd,
      dantoc,
      tongiao,
      tdhv,
      chuyenmon,
      chuyennganh,
      ngoaingu,
      numberPhone,
      email,
      tinh,
      huyen,
      xa,
      sonha,
      tamtruTinh,
      tamtruHuyen,
      tamtruXa,
      hotench,
      ngaysinhch,
      moiquanhech,
      stk,
      taynghe,
      tttd,
      sothe,
      vtut,
      tomtacbt,
      sdtnt1,
      qhnt1,
      ttnt1,
      sdtnt2,
      qhnt2,
      ttnt2,
      sdtnt3,
      qhnt3,
      ttnt3,
      hotenbr,
      namsinhbr,
      nghenghiepbr,
      choohtbr,
      hotenmr,
      namsinhmr,
      nghenghiepmr,
      choohtme,
      hotencv,
      namsinhcv,
      nghenghiepcv,
      choohtcv,
      hotenc1,
      namsinhc1,
      nghenghiepc1,
      chooc1,
      hotenc2,
      namsinhc2,
      nghenghiepc2,
      hotenc3,
      namsinhc3,
      nghenghiepc3,
      chooc3,
      hotenc4,
      namsinhc4,
      nghenghiepc4,
      chooc4,
      hotenc5,
      namsinhc5,
      nghenghiepc5,
      chooc5,
      hotenbocv,
      namsinhbcv,
      nghenghiepbcv,
      choobcv,
      hotenbmcv,
      namsinhmcv,
      nghenghiepmcv,
      choomcv,
      hotenace1cv,
      namsinhace1cv,
      nghenghiepace1cv,
      chooace1cv,
      hotenace2cv,
      namsinhace2cv,
      nghenghiepace2cv,
      chooace2cv,
      hotenace1,
      namsinhace1,
      nghenghiepace1,
      chooace1,
      hotenace2,
      namsinhace2,
      nghenghiepace2,
      chooace2,
      imageUrl1: cloudinaryResponses[0],
      imageUrl2: cloudinaryResponses[1],
      xacnhan,
    });
    await newUser.save();
    res.status(201).json({ imageUrls: cloudinaryResponses, newUser });
  } catch (err) {
    console.error("Đã có lỗi xảy ra:", err);
    res.status(500).send("Đã có lỗi xảy ra khi đăng ký người dùng");
  }
};

exports.addTinh = async (req, res) => {
  const { tinh, huyen } = req.body;
  try {
    const newTinh = new Tinh({ tinh, huyen });
    await newTinh.save();
    res.status(201).send(newTinh);
  } catch (error) {
    console.log("Đã có lỗi xảy ra:", error);
    res.status(500).send("Đã có lỗi khi đăng ký Tỉnh");
  }
};

// Xử lý logic của route
exports.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await User.findByIdAndDelete(id);
    res.send("Data deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Endpoint API để cập nhật thông tin đăng ký
exports.updataData = async (req, res) => {
  const cccd = req.params.cccd;
  const {
    formData,
    noicapcccd,
    answer,
    tinh,
    huyen,
    tamtruTinh,
    tamtruHuyen,
    tamtruXa,
    moiquanhech,
    xa,
    noisinh,
    tttd,
    tongiao,
    qhnt1,
    qhnt2,
    qhnt3,
  } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { cccd: cccd },
      {
        ...formData,
        noicapcccd: noicapcccd,
        xacnhan: answer,
        tinh: tinh,
        huyen: huyen,
        noisinh: noisinh,
        tamtruTinh: tamtruTinh,
        tamtruHuyen: tamtruHuyen,
        tamtruXa: tamtruXa,
        moiquanhech: moiquanhech,
        xa: xa,
        tongiao: tongiao,
        tttd: tttd,
        qhnt1: qhnt1,
        qhnt2: qhnt2,
        qhnt3: qhnt3,
      },
      { new: true }
    );
    if (user) {
      console.log("Cập nhận thành công ");
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "Không tìm thấy thông tin đăng ký cho Căn cước công dân này.",
      });
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin đăng ký:", error);
    res.status(500).json({ message: "Lỗi khi cập nhật thông tin đăng ký." });
  }
};

exports.Search = async (req, res) => {
  const cccd = req.params.cccd;
  try {
    const user = await User.findOne({ cccd });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "Không tìm thấy thông tin đăng ký cho Căn cước công dân này.",
      });
    }
  } catch (error) {
    console.error("Lỗi khi tìm kiếm thông tin đăng ký:", error);
    res.status(500).json({ message: "Lỗi khi tìm kiếm thông tin đăng ký." });
  }
};

exports.DeleteAll = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: "Tất cả dữ liệu đã được xóa" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa dữ liệu", error });
  }
};

// Endpoint để kích hoạt quá trình xuất dữ liệu
exports.Export = async (req, res) => {
  try {
    await writeToGoogleSheets();
    res.send("Dữ liệu đã được xuất thành công vào Google Sheets");
  } catch (error) {
    console.error("Lỗi khi xuất dữ liệu:", error);
    res.status(500).send("Có lỗi xảy ra khi xuất dữ liệu");
  }
};
// Endpoint để gửi tin nhắn SMS
exports.sendSMS = async (req, res) => {
  const { numberPhone, smsText } = req.body;
  console.log(numberPhone);

  // // Thông tin xác thực từ Infobip
  const username = "huynguyen030704";
  const password = "Huynguyen2004@";

  // // Tạo yêu cầu tin nhắn
  const smsRequest = {
    from: "+44 7491 163443",
    to: `+84 ${numberPhone}`,
    text: `${smsText}`,
  };
  console.log(smsRequest);

  // // Gửi yêu cầu tin nhắn SMS tới Infobip API
  axios
    .post("https://api.infobip.com/sms/1/text/single", smsRequest, {
      auth: {
        username,
        password,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Đã có lỗi xảy ra khi gửi tin nhắn:", error);
      res.status(500).send("Đã có lỗi xảy ra khi gửi tin nhắn!");
    });
};
