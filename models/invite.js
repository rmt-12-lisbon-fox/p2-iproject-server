'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invite.belongsTo(models.User)
      Invite.belongsTo(models.Tamplate)
    }
  };
  Invite.init({
    nameMale: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name Male can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    nameFemale: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name Female can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    loveStory: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Love Story can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    dateAkad: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date Akad can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    addressAkad: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Address Akad can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    dateReception: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date Reseptionis can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    addressReception: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Address Receptionis can not be empty'
        },
        notNull: {
          msg: 'Data not null'
        },
      }
    },
    UserId: DataTypes.INTEGER,
    TamplateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Invite',
  });
  return Invite;
};