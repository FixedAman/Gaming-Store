const handleValidationErrors = (error, res) => {
  if (error.errors) {
    // Log detailed error messages from Zod validation
    error.errors.forEach((err) => {
      console.error(
        `Validation Error: ${err.message} at ${err.path.join(" > ")}`
      );
    });

    // Create a descriptive error response
    const formattedErrors = error.errors.map((err) => ({
      path: err.path.join(" > "),
      message: err.message,
    }));

    // Send error response
    return res.status(400).json({ errors: formattedErrors });
  }

  // Log any other unexpected errors
  console.error("Unexpected Error:", error);
  return res.status(500).json({ message: "An unexpected error occurred." });
};

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (error) {
    handleValidationErrors(error, res);
  }
};

const loginValid = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (error) {
    handleValidationErrors(error, res);
  }
};

module.exports = { validate, loginValid };
