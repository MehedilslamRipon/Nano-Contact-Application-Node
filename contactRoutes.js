const router = require("express").Router();
const {
  getAllContacts,
  createContact,
  getContactsById,
  updateContactById,
  deleteContactById,
} = require("./contactsController");

router.get("/", getAllContacts);
router.post("/", createContact);
router.get("/:id", getContactsById);
router.put("/:id", updateContactById);
router.delete("/:id", deleteContactById);

module.exports = router;
