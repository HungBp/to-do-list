const express = require('express');
const {
  todoCreate,
  todoRead,
  todoUpdate,
  todoDelete
} = require('../controller/todoCRUD');
const { todoModelReq } = require('../middleware/middleware');
const router = express.Router();

// middlerware
router.use(todoModelReq);

// API
// create new todo
router.post("/new", todoCreate);

// get all/completed/pending todo list / get todos in trash
router.get("/all/:currPage", (req, res) => todoRead(req, res, {trash: false}));
router.get("/completed/:currPage", (req, res) => todoRead(req, res, {completed: true, trash: false}));
router.get("/pending/:currPage", (req, res) => todoRead(req, res, {completed: false, trash: false}));
router.get("/trash/:currPage", (req, res) => todoRead(req, res, {trash: true}));

// edit todo / move todo to trash / restore todo from trash / change completed status
router.patch("/edit/:id", todoUpdate);
router.patch("/movetotrash/:id", todoUpdate);
router.patch("/restorefromtrash/:id", todoUpdate);
router.patch("/completed/:id", todoUpdate);

// delete todo
router.delete("/delete/:id", todoDelete);

module.exports = router;