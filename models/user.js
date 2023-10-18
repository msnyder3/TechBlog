
const { Model } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    
    id: {
        type: INT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
    username: {
        type: STRING,
        allowNull:false,
        unique: true
    },
    
    password: {
        type: STRING,
        allowNull: false,
        validate: {
            len: [4]
        }

    }
  },
  {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;