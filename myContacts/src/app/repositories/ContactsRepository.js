const { v4 } = require('uuid')
const contacts = [
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
      contacts.find((contacts) => contacts.id === id ),
      ))};


}

module.exports = new ContactsRepository();
