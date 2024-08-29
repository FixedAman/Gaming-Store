const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "reenter your username" })
    .trim()
    .min(3, { message: "name must be 3 charecters " })
    .max(255, { message: "maximum 255 charecters" }),
  email: z
    .string({ required_error: "reenter your username" })
    .trim()
    .email({ message: "invalid email addressed" })
    .min(3, { message: "name must be 3 charecters " })
    .max(255, { message: "maximum 255 charecters" }),
  phone: z
    .string({ required_error: "reenter your phone " })
    .trim()
    .min(3, { message: "name must be 3 charecters " })
    .max(10, { message: "maximum 10  Digits" }),

  password: z
    .string({ required_error: "reenter your password" })
    .trim()
    .min(3, { message: "password must be 3 charecters " })
    .max(255, { message: "maximum 255 charecters" }),
});

const signinSchema = z.object({
  email: z
    .string({ required_error: "reenter your username" })
    .trim()
    .email({ message: "invalid email addressed" })
    .min(3, { message: "name must be 3 charecters " })
    .max(255, { message: "maximum 255 charecters" }),

  password: z
    .string({ required_error: "reenter your password" })
    .trim()
    .min(3, { message: "password must be 3 charecters " })
    .max(255, { message: "maximum 255 charecters" }),
});

module.exports = { signupSchema, signinSchema };
