import { RequestHandler, Response } from "express-serve-static-core";
import * as firebase from "firebase";
import { db } from "../util/admin";
import config from "../util/config";
import { validateLoginData, validateSignupData } from "../util/validators";
import { Paragraph } from "./paragraphs";

firebase.initializeApp(config);

const signup: RequestHandler = async (req, res) => {
  const { email, password, confirmPassword, userName } = req.body;
  const { errors, valid } = validateSignupData(
    email,
    password,
    confirmPassword,
    userName
  );

  if (!valid) return res.status(400).json(errors);

  // Check if user exists
  try {
    const doc = await db.doc(`/users/${userName}`).get();
    if (doc.exists) {
      return res
        .status(400)
        .json({ userName: "This userName is already taken" });
    }
  } catch (err) {
    return console.error(err);
  }

  // Add user to database and send token
  try {
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (!data.user) throw Error();

    const userCredentials = {
      userName,
      userId: data.user.uid,
      createdAt: new Date().toISOString()
    };
    await db.doc(`/users/${userName}`).set(userCredentials);

    const token = await data.user.getIdToken();
    return res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    if (err.code === "auth/email-already-in-use") {
      return res.status(400).json({ email: "Email is already in use" });
    } else {
      return res
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    }
  }
};

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const { errors, valid } = validateLoginData(email, password);

  if (!valid) return res.status(400).json(errors);

  try {
    const data = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (!data.user) throw new Error();

    const token = await data.user.getIdToken();
    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(403).json({ general: "Wrong credentials" });
  }
};

const getUserDetails: RequestHandler = async (req, res) => {
  try {
    const { userName } = req.params;

    const [userData, paragraphs] = await Promise.all([
      getUserData(userName, res),
      getParagraphsForUser(userName)
    ]);

    return res.json({ ...userData, paragraphs });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.code });
  }
};

export { signup, login, getUserDetails };

const getUserData = async (userName: string, res: Response) => {
  const userSnap = await db.doc(`/users/${userName}`).get();
  if (!userSnap.exists)
    return res.status(404).json({ error: "User not found" });
  return await userSnap.data();
};

const getParagraphsForUser = async (userName: string) => {
  let paragraphs: Paragraph[] = [];

  const paragraphData = await db
    .collection("paragraphs")
    .where("userName", "==", userName)
    .orderBy("createdAt", "desc")
    .get();

  await paragraphData.forEach(async doc => {
    const data = await doc.data();
    const { body, createdAt, userName } = data;
    paragraphs.push({ body, createdAt, userName });
  });

  return paragraphs;
};
