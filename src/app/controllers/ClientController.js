import Client from '../models/Client';
import Address from '../models/Address';
import * as Yup from 'yup';

class ClientController {
  
  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        rz_social: Yup.string().required(),
        fantasia: Yup.string(),
        email: Yup.string().email().required(),
        telefone: Yup.string().required(),
        logradouro: Yup.string().required(),
        complemento: Yup.string().required(),
        cep: Yup.string().max(9).required(),
        referencia: Yup.string(),
        tipo: Yup.string().required()
      });
      await schema.validate(req.body);//validation schema.
      const clientExist = await Client.findOne({ where: { email: req.body.email } });    
        if(clientExist){
          return res.status(401).json({error: 'E-mail já cadastrado.'});
        }else{
          const { id } = await Client.create(req.body);//create client.
          const { logradouro, complemento, cep, referencia, tipo } = req.body;
          //create address client.
          const add = await Address.create({
            client_id : id,
            logradouro,
            complemento,
            cep,
            referencia,
            tipo
          });
          return res.json({msg: 'Cadastro realizado com sucesso!'});
        }
    } catch (err) { // return errors of validation.
      return res.status(401).json({error: err.message});
    }
  }

}

export default new ClientController();
