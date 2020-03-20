import Address from '../models/Address';
import Client from '../models/Client';

class AddressController {
  /**
   * List address by tipo.
   */
  async list(req, res) {
    const { tipo } = req.body;
    if(!tipo){ //basic validation
      return res.status(401).json({error: 'Tipo é obrigatorio.'});
    }
    if( !(tipo == 'residencial' || tipo == 'comercial') ){
      return res.status(401).json({error: 'Tipo deve ser : residencial ou comercial.'});
    }

    const address = await Address.findAll({
      where: { tipo },
      attributes: ['logradouro', 'complemento', 'cep', 'referencia', 'tipo'],
      include: [
        {
          model: Client,
          as: 'client',
          attributes: ['rz_social', 'fantasia', 'email', 'telefone'],
        },
      ],
    });
    return res.json(address);
  }

}

export default new AddressController();
