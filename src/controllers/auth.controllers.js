import path from "node:path";
import { User } from "../models/index.js";

export const authRegisterCon = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.send("Email already taken");
    }

    req.body.full_name = req.body.fullName;

    const user = new User(req.body);
    console.log(user);

    await user.save();

    res.send({
      message: "created",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const authLoginCon = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select({
      full_name: 1,
      email: 1,
      password: 1,
    });

    if (!user) return res.send("user not found!");

    const isEqual = await user.compare(password);

    if (!isEqual) return res.send("Email or password is not valid!");

    res.cookie("user", { email, password });
    res.send({
      message: "loggedIn",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const authGetRegisterCon = (req, res, next) => {
  const registerHtmlPath = path.join(
    process.cwd(),
    "src",
    "public",
    "register.html"
  );
  console.log(registerHtmlPath);

  res.sendFile(registerHtmlPath);
};

export const authGetLoginCon = (req, res, next) => {
  const loginHtmlPath = path.join(process.cwd(), "src", "public", "login.html");
  console.log(loginHtmlPath);

  res.sendFile(loginHtmlPath);
};

export const authGetMeCon = async (req, res, next) => {
  const { user } = req.cookies;
  if (!user) {
    const loginHtmlPath = path.join(
      process.cwd(),
      "src",
      "public",
      "login.html"
    );
    console.log(loginHtmlPath);
    return res.sendFile(loginHtmlPath);
  }
  const userExists = await User.findOne({ email: user.email });

  console.log(userExists);
  return res.send(userExists);
};
