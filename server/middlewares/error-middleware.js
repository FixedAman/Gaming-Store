const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  let message = err.message || "An unexpected error occurred.";
  let extraDetails = err.extraDetails || "Error from backend";

  // Check if the error is from a Zod validation
  if (err.error && err.error.errors) {
    // Format Zod errors to be more readable
    const validationErrors = err.error.errors.map((error) => ({
      field: error.path.join(" > "),
      message: error.message,
    }));

    message = "Validation failed";
    extraDetails = validationErrors;
  }

  // Log the error to the console for debugging purposes
  console.error(`Error Status: ${status}`, {
    message,
    extraDetails,
  });

  res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
