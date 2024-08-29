const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend problem";
  const extraDetails = err.extraDetails || "error from backend";

  res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
