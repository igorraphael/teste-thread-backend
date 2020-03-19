import Sequelize, { Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        rz_social: Sequelize.STRING,
        fantasia: Sequelize.STRING,
        email: Sequelize.STRING,
        telefone: Sequelize.TEXT,
      },
      { sequelize }
    );

    return this;
  }
}
export default Client;
