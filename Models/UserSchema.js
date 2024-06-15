const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    gender: {
      type: String,
    },
    date: {
      type: String,
    },
    noisinh: {
      type: String,
      default: "",
    },
    cccd: {
      type: String,
      required: true,
    },
    ngaycapcccd: {
      type: String,
      default: "",
    },
    noicapcccd: {
      type: String,
      default: "",
    },
    dantoc: {
      type: String,
      default: "",
    },
    tongiao: {
      type: String,
      default: "",
    },
    tdhv: {
      type: String,
      default: "",
    },
    chuyenmon: {
      type: String,
      default: "",
    },
    chuyennganh: {
      type: String,
      default: "",
    },
    ngoaingu: {
      type: String,
      default: "",
    },
    numberPhone: {
      type: Number,
    },
    email: {
      type: String,
      default: "",
    },
    tinh: {
      type: String,
      default: "",
    },
    huyen: {
      type: String,
      default: "",
    },
    xa: {
      type: String,
      default: "",
    },
    sonha: {
      type: String,
      default: "",
    },
    tamtruTinh: {
      type: String,
      default: "",
    },
    tamtruHuyen: {
      type: String,
      default: "",
    },
    tamtruXa: {
      type: String,
      default: "",
    },
    hotench: {
      type: String,
      default: "",
    },
    ngaysinhch: {
      type: String,
      default: "",
    },
    moiquanhech: {
      type: String,
      default: "",
    },
    stk: {
      type: String,
      default: "",
    },
    taynghe: {
      type: String,
      default: "",
    },
    tttd: {
      type: String,
      default: "",
    },
    sothe: {
      type: String,
      default: "",
    },
    vtut: {
      type: String,
      default: "",
    },
    tomtacbt: {
      type: String,
      default: "",
    },
    sdtnt1: {
      type: String,
      default: "",
    },
    qhnt1: {
      type: String,
      default: "",
    },
    ttnt1: {
      type: String,
      default: "",
    },
    sdtnt2: {
      type: String,
      default: "",
    },
    qhnt2: {
      type: String,
      default: "",
    },
    ttnt2: {
      type: String,
      default: "",
    },
    sdtnt3: {
      type: String,
      default: "",
    },
    qhnt3: {
      type: String,
      default: "",
    },
    ttnt3: {
      type: String,
      default: "",
    },
    hotenbr: {
      type: String,
      default: "",
    },
    namsinhbr: {
      type: String,
      default: "",
    },
    nghenghiepbr: {
      type: String,
      default: "",
    },
    choohtbr: {
      type: String,
      default: "",
    },
    hotenmr: {
      type: String,
      default: "",
    },
    namsinhmr: {
      type: String,
      default: "",
    },
    nghenghiepmr: {
      type: String,
      default: "",
    },
    choohtmr: {
      type: String,
      default: "",
    },
    hotencv: {
      type: String,
      default: "",
    },
    namsinhcv: {
      type: String,
      default: "",
    },
    nghenghiepcv: {
      type: String,
      default: "",
    },
    choohtcv: {
      type: String,
      default: "",
    },
    hotenc1: {
      type: String,
      default: "",
    },
    namsinhc1: {
      type: String,
      default: "",
    },
    nghenghiepc1: {
      type: String,
      default: "",
    },
    chooc1: {
      type: String,
      default: "",
    },
    hotenc2: {
      type: String,
      default: "",
    },
    namsinhc2: {
      type: String,
      default: "",
    },
    nghenghiepc2: {
      type: String,
      default: "",
    },
    chooc2: {
      type: String,
      default: "",
    },
    hotenc3: {
      type: String,
      default: "",
    },
    namsinhc3: {
      type: String,
      default: "",
    },
    nghenghiepc3: {
      type: String,
      default: "",
    },
    chooc3: {
      type: String,
      default: "",
    },
    hotenc4: {
      type: String,
      default: "",
    },
    namsinhc4: {
      type: String,
      default: "",
    },
    nghenghiepc4: {
      type: String,
      default: "",
    },
    chooc4: {
      type: String,
      default: "",
    },
    hotenc5: {
      type: String,
      default: "",
    },
    namsinhc5: {
      type: String,
      default: "",
    },
    nghenghiepc5: {
      type: String,
      default: "",
    },
    chooc5: {
      type: String,
      default: "",
    },
    hotenbocv: {
      type: String,
      default: "",
    },
    namsinhbocv: {
      type: String,
      default: "",
    },
    nghenghiepbocv: {
      type: String,
      default: "",
    },
    choobocv: {
      type: String,
      default: "",
    },
    hotenmecv: {
      type: String,
      default: "",
    },
    namsinhmecv: {
      type: String,
      default: "",
    },
    nghenghiepmecv: {
      type: String,
      default: "",
    },
    choomecv: {
      type: String,
      default: "",
    },
    hotenacecv1: {
      type: String,
      default: "",
    },
    namsinhacecv1: {
      type: String,
      default: "",
    },
    nghenghiepacecv1: {
      type: String,
      default: "",
    },
    chooacecv1: {
      type: String,
      default: "",
    },
    hotenacecv2: {
      type: String,
      default: "",
    },
    namsinhacecv2: {
      type: String,
      default: "",
    },
    nghenghiepacecv2: {
      type: String,
      default: "",
    },
    chooacecv2: {
      type: String,
      default: "",
    },
    hotenace1: {
      type: String,
      default: "",
    },
    namsinhace1: {
      type: String,
      default: "",
    },
    nghenghiepace1: {
      type: String,
      default: "",
    },
    chooace1: {
      type: String,
      default: "",
    },
    hotenace2: {
      type: String,
      default: "",
    },
    namsinhace2: {
      type: String,
      default: "",
    },
    nghenghiepace2: {
      type: String,
      default: "",
    },
    chooace2: {
      type: String,
      default: "",
    },
    xacnhan: {
      type: String,
    },
    imageUrl1: String,
    imageUrl2: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
