class TodoController {
    static getTodos(req,res){
        const arrObj = [{
            id:1,
            name:'laptop'
        },{
            id:2,name:'komputer'
        }]
        res.json(arrObj)
    }
    static addTodos(req,res){
        res.json({
            message:"Page add Todos"
        })
    }
}
module.exports = TodoController