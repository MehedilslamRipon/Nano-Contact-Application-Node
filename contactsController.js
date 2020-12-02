const contacts = require("./Contacts");

getAllContacts = (req, res) => {
  res.json(contacts.getAllContacts());
};

createContact = (req, res) => {
  let { name, phone, email } = req.body;
  let contact = contacts.createContact({
    name,
    phone,
    email,
  });

  res.json(contact);
};

getContactsById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let contact = contacts.getContactsById(id);
  res.json(contact);
};

updateContactById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let { name, phone, email } = req.body;
  let contact = contacts.updateContactById(id, {
    name,
    phone,
    email,
  });

  res.json(contact);
};

deleteContactById = (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  let contact = contacts.deleteContactById(id);
  res.json(contact);
};

module.exports = {
  getAllContacts,
  createContact,
  getContactsById,
  updateContactById,
  deleteContactById,
};
