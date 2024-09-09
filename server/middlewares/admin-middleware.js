const adminMiddleWare = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      res.status(404).json({ massege: "access denied user is not an admin" });
    }
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = adminMiddleWare;
