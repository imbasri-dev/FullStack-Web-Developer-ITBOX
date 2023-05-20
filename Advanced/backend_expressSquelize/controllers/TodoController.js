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
  static deleteTodo(req,res){
    let id = +req.params.id

    todo.destroy({
      where:{
        id
      }
    }).then(result=>{
      if(result === 1 ){
       return res.json({
          message:`Todo has been Delete ${id}`
        })
      }
      res.status(400).json({
        message:'Todo failed to Delete!'
      })
    }).catch(err=>{
      res.json(err)
    })
  }
   static updateTodo(req,res){
    let id = +req.params.id
    const {task,status} = req.body

    todo.update({task,status: Boolean(status)},{
      where:{
        id
      },
      returning:true,
      plain:true
    }).then(result=>{
      console.log(result[1])
        return res.status(201).json({
          message:"data has been update",
         data:result[1]
        })
      
    }).catch(err=>{
      res.status(500).json(err)
    })
  }
}
module.exports = TodoController;
