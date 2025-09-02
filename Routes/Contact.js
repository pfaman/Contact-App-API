import express from 'express';
import { deleteContact, newContact} from '../Controllers/Contact.js';
import { getAllContact } from '../Controllers/Contact.js';
import { getContactId } from '../Controllers/Contact.js';
import { updateContact } from '../Controllers/Contact.js';
const router = express.Router();


// Get All Contact
// @api dsc :- Getting contacts
// @api method :- GET
// @api endpoint :- /api/contact/

router.get('/', getAllContact);

// Get Contact By Id
// @api dsc :- Get contact
// @api method :- GET
// @api endpoint :- /api/contact/:id

router.get('/:id', getContactId);


// Create New Contact
// @api dsc :- Create a new contact
// @api method :- POST
// @api endpoint :- /api/contact/new

router.post('/new', newContact);


// Update Contact By Id
// @api dsc :- Updating the contact
// @api method :- PUT
// @api endpoint :- /api/contact/update

router.put('/:id', updateContact);


// Delete Contact By Id
// @api dsc :- Deleteing the contact
// @api method :- Delete
// @api endpoint :- /api/contact/update

router.delete('/:id', deleteContact);

export default router;