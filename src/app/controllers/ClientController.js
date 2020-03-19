import Client from '../models/Client';

class ClientController {
  /**
   * Create initial client
   */
  async create(req, res) {
    const { rz_social, email, telefone } = await Client.create(req.body);
    return res.json({ rz_social, email, telefone });
  }

}

export default new ClientController();
