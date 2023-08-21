const { v4 } = require('uuid')
let contacts = [
  {
    id: v4(),
    name: 'Guilherme',
    email: 'Guilherme@mail.com',
    phone: '119444144589',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'Jose@mail.com',
    phone: '17238798122',
    category: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    })
  };

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id )
      ))};

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    })
  };


  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email )
    ))
  };

  create(name, email, phone, category_id) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id
      };
      contacts.push(newContact);
      resolve(newContact);
    })
  };
  }



module.exports = new ContactsRepository();
