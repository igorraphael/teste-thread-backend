import Sequelize, { Model } from 'sequelize';

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        logradouro: Sequelize.STRING,
        complemento: Sequelize.STRING,
        cep: Sequelize.STRING(9),
        referencia: Sequelize.TEXT,
        tipo: Sequelize.STRING(15)
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }
}
export default Address;
