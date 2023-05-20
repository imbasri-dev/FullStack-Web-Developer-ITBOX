const { todo } = require("../models");

class TodoController {
  static getTodos(req, res) {
    todo.findAll().then((todos) => {
      res.json({todos});
    }).catch(err => { 
        res.json(err)
    });
  }
  static addTodos(req, res) {
    res.json({
      message: "Page add Todos",
    });
  }
}
module.exports = TodoController;
