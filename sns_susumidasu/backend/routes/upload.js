const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });
//画像アップロード用API
router.post("/", upload.single("file"),(req, res) => {
	try {
		return res.status(200).json("画像アップロードに成功！");
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;


