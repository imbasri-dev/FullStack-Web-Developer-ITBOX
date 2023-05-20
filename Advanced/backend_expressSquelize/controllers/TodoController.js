const { todo } = require("../models");

class TodoController {
  static getTodos(req, res) {
    todo
      .findAll()
      .then((todos) => {
        res.json({ todos });
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static addTodos(req, res) {
    // console.log(req.body)
    const { task, status } = req.body;

    todo
      .create({
        task,
        status,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static findById(req, res) {
    let id = +req.params.id;

    todo
      .findByPk(id)
      .then((result) => {
        if (result !== null) {
          return res.json(result);
        }
        res.json({
          message: "Todo Not Found",
        });
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = TodoController;
