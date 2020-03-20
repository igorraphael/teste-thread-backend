import Address from '../models/Address';

class AddressController {
  /**
   * Create initial client
   */
  async create(req, res) {
    const { client_id, logradouro, complemento, cep, referencia, tipo } = await Address.create(req.body);
    return res.json({ client_id, logradouro, complemento, cep, referencia, tipo });
  }

}

export default new AddressController();
