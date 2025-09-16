const db = require("../models");
const User = db.user;

const path = require("path");

const multer = require("multer");

exports.createuser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const photo_profil = req.file ? req.file.path : null;

    const user = await User.create({
      username,
      email,
      password,
      photo_profil,
    });

    return res.status(200).send({ message: "user created !" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: "10000000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }

    cb("give proper file formate to upload");
  },
}).single("photo_profil");
