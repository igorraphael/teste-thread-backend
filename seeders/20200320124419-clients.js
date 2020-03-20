'use strict';

module.exports = {
  up: async (queryInterface) => {
      await queryInterface.bulkInsert('clients', [
        { rz_social: 'John Doe', fantasia: '', email: 'johndoe@gmail.com', telefone: '(47) 9922-5547' , created_at: new Date(), updated_at: new Date() },
        { rz_social: 'Joseph Wallace', fantasia: 'Loja 10', email: 'jwallace@gmail.com', telefone: '(45) 9821-1234', created_at: new Date(), updated_at: new Date()  },
        { rz_social: 'Harper Goff', fantasia: '', email: 'goff@gmail.com', telefone: '(43) 9614-6852', created_at: new Date(), updated_at: new Date()  },
        { rz_social: 'Alec Knapp', fantasia: 'Artigos esportivos', email: 'knapp@gmail.com', telefone: '(41) 8869-1428', created_at: new Date(), updated_at: new Date()  },
    ], {});

    const clients = await queryInterface.sequelize.query(`SELECT id from CLIENTS`);
    
    const clientsRow = clients[0];
    // console.log(clientsRow);
    return await queryInterface.bulkInsert('addresses', [
      {client_id: clientsRow[0].id, logradouro: 'Av. Maranhao', complemento: 'n 856', cep: '86870-000', referencia: '', tipo: 'residencial', created_at: new Date(), updated_at: new Date() },
      {client_id: clientsRow[1].id, logradouro: 'Rua Augusto Roche', complemento: 'sala 5', cep: '80010-010', referencia: '', tipo: 'comercial', created_at: new Date(), updated_at: new Date() },
      {client_id: clientsRow[2].id, logradouro: 'Av. Brasil', complemento: 'n 32', cep: '80020-210', referencia: 'Muro marron', tipo: 'residencial', created_at: new Date(), updated_at: new Date() },
      {client_id: clientsRow[3].id, logradouro: 'Rua Jão Paulo', complemento: 'n 1965', cep: '06542-089', referencia: 'ao lado da sorveteria', tipo: 'comercial', created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('clients', null, {});
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
