// signup new user
const userSignup = (req, res) => {
  req.user.create({
    username: "Hung",
    password: "test"
  })
    .then(() => {
      res.send("new user");
    });
};

// remove all data of table
const userRemove = (req, res) => {
  req.user.destroy({
    truncate: true
  })
    .then(() => {
      res.send("remove user");
    });
};

module.exports = {
  userSignup,
  userRemove
}