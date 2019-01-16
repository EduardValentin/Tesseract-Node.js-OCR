const Service = require('../services/user-service');
const UserService = new Service();

const sendError = (res,status,error) => {
  res.status(status).send({
    error,
  });
}

const registerUser = async (req, res, next) => {
  const user = {
    ...req.body,
    password: req.body.password,
  };
  
  try {
    const newUser = await UserService.createNew(user);
    res.status(200).send({
      user: newUser,
    });
  }
  catch(error) {
    sendError(res, 500, error.message);
  }
};

const getUsers = async (req, res, next) => {
  try{
    const allUsers = await UserService.getAll();
    res.status(200).send({
      users: allUsers,
    })
  }
  catch(error){
    sendError(res,404,error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const token = await UserService.login(req.body);
    res.status(200).send({token});
  }
  catch(error) {
    sendError(res, 401, error.message);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.body;
  const deletedRowsCount = await UserService.delete(id);
  if(!deletedRowsCount) {
    sendError(res, 404, 'User not found');
  }
  res.status(204).send({message: 'User deleted succesfuly'});  
};

module.exports = {
  registerUser,
  getUsers,
  loginUser,
  deleteUser,
};