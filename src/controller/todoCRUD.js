// create new todo
const todoCreate = (req, res) => {
  req.todo.create(req.body)
    .then(() => res.send())
    .catch(err => res.status(400).send({error: err.message}));
};

// get all/completed/pending todo list / get todos in trash
const todoRead = (req, res, filter) => {
  const limitPagination = 5;
  const offsetPagination = limitPagination * (req.params.currPage - 1);

  req.todo.findAndCountAll({
    where: filter,
    order: [["id", "DESC"]],
    offset: offsetPagination,
    limit: limitPagination
  })
    .then(({count, rows: todos}) => {
      const numOfPages = Math.ceil(count / limitPagination);
      res.json({numOfPages, todos});
    })
    .catch(err => res.status(400).send({error: err.message}));
};

// edit todo / move todo to trash / restore todo from trash / change completed status
const todoUpdate = (req, res) => {
  req.todo.update(req.body, {
    where: { id: req.params.id }
  })
    .then(() => req.todo.findByPk(req.params.id))
    .then(data => res.json(data))
    .catch(err => res.status(400).send({error: err.message}));
};

// delete todo
const todoDelete = (req, res) => {
  req.todo.destroy({
    where: { id: req.params.id }
  })
    .then(() => res.json({id: Number(req.params.id)}))
    .catch(err => res.status(400).send({error: err.message}));
};

module.exports = {
  todoCreate,
  todoRead,
  todoUpdate,
  todoDelete
};