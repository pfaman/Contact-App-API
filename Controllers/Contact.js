import { Contact } from "../Models/Contact.js";




// create new contact

export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if(name == "" || email == "" || phone == "" || type == "") {
    return res.status(400).json({ error: "All fields are required" });
  }

  let saveContact = await Contact.create({ name, email, phone, type , user : req.user });
  return res.status(201).json({ message: "Contact created successfully", contact: saveContact, success: true });
}

// Get All Contact
export const getAllContact = async (req, res) => {
  const userContacts = await Contact.find();

  if(!userContacts) {
    return res.status(404).json({ message: "No contacts found" });
  }

  return res.status(200).json({ message: "Contacts retrieved successfully", contacts: userContacts, success: true });
}

// Get Contact By Id

export const getContactId = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);

  if(!userContact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  return res.status(200).json({ message: "Contact retrieved successfully", contact: userContact, success: true });
}

// Update Contact By Id

export const updateContact = async (req, res) => {

  const id = req.params.id;
  const { name ,  email , phone, type} = req.body

  let updateContact = await Contact.findByIdAndUpdate(id, {

    name,
    email,
    phone,
    type
  },{
    new : true
  });

  if(!updateContact){
    return res.json({message : "No contact exist", success : false})
  }
  return res.json({message : "Contact Updated Successfully!!!", success : true})
}

// Delete Contact By Id

export const deleteContact = async (req, res) => {

  const id = req.params.id;

  let deleteContact = await Contact.findByIdAndDelete(id);

  if(!deleteContact){
    return res.json({message : "No contact exist", success : false})
  }
  return res.json({message : "Contact Deleted Successfully!!!", success : true})
}

// Get Contact by UserId

export const getContactByUserId = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.find({user:id});

  if(!userContact) {
    return res.status(404).json({ message: "No Contact found" });
  }

  return res.status(200).json({ message: "User Specific Contact retrieved successfully", contact: userContact, success: true });
}