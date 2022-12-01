const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class Todo extends Model {

  static async addTask(params){
    return await Todo.create(params);
  }
  /*displayableString() {
    let checkbox = this.completed ? "[x]" : "[ ]";
    return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
  }*/
  displayableString() {
    let checkbox = this.completed ? "[x]" : "[ ]";
    if (this.dueDate === new Date().toLocaleDateString("en-CA")){
      return `${this.id}. ${checkbox} ${this.title}`;
    }else{
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
    
  }
};
Todo.init(
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
  }
);

Todo.sync();
module.exports = Todo;