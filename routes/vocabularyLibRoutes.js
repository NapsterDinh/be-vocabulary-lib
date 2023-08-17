const express = require("express");
const router = express.Router();
const vocabularyLibController = require("../controllers/vocabularyLibController");

router.get("/", vocabularyLibController.getAll);
router.post("/", vocabularyLibController.addNew);
router.delete("/", vocabularyLibController.deleteEmptyMeaning);
// .post(vocabularyLibController/z.addNew);
// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
