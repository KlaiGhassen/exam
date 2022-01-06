const router = require("express").Router();
const JournayController = require("../controllers/Journey.controller");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const newFileName = (+new Date()).toString() + path.extname(file.originalname);
        cb(null, newFileName);
    }
})

const upload = multer({ storage });

/**
 * @Path /Journays
 */
router.route("/")
    .post(upload.single("image"), JournayController.createJournay)
    .get(JournayController.getALLJournays);

router.get("/all", JournayController.getJournaysByUser);
router.get("/:id", JournayController.getJournayById);
router.get("/delete/:id", JournayController.deleteJournay);

router.route("/reservation")


module.exports = router;