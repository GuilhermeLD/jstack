const ContactsRepository = require('../repositories/ContactsRepository')

class ConctatController {
  async index(request, response) {
    // listar tudo
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // obter UM
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);


    if (!contact) {
      return response.status(404).json({ error: 'User not found'})
    }

    response.json(contact);

  }

  async store(request, response) {
    // criar
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This email is already been taken' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    });

    response.json(contact)
  }

  update() {
    // editar
  }

  async delete(request, response) {
    // delete
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);


    if (!contact) {
      return response.status(404).json({ error: 'User not found'})
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ConctatController();
