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
    response.json(request.params);

    if (!contact) {
      return response.status(404).json({ error: 'User not found'})
    }

    response.json(contact);

  }

  store() {
    // criar
  }

  update() {
    // editar
  }

  delete() {
    // delete
  }
}

module.exports = new ConctatController();
