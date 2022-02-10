exports.authorizationCheck = async (req, res, next) => {
  if (req.user.roleId !== 1) {
    return res.sendStatus(401);
  } else {
    // move to the next middleware, cause it's ok
    next();
  }
};
