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
    .string({ required_error: "Please re-enter your phone number" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be at most 15 digits" }) // Adjust range as per requirement
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

  password: z
    .string({ required_error: "reenter your password" })
    .trim()
    .min(5, { message: "password must be 5 charecters " })
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
