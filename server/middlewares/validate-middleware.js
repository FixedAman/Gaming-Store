const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body);

    next();
  } catch (error) {
    const status = 400;
    const message = { error };
    const err = {
      status,
      message,
    };
    next(err);
  }
};

const loginValid = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (error) {
    const status = 400;
    const message = { error };
    const err = {
      status,
      message,
    };
    next(err);
  }
};

module.exports = { validate, loginValid };
