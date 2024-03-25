
module.exports = (connection,DataTypes)=>{

const Users = connection.define(
"Users",
{

    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    //   },

      
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }

}

)
return Users;
}

