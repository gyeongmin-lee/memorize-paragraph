import { RequestHandler } from "express-serve-static-core";
import { admin, db } from "./admin";

declare module "express-serve-static-core" {
  interface Request {
    user?: admin.auth.DecodedIdToken;
  }
}

export const FBAuth: RequestHandler = async (req, res, next) => {
  let idToken = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    res.status(403).json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;

    const matchingUsers = await db
      .collection("users")
      .where("userId", "==", req.user.uid)
      .limit(1)
      .get();
    const userData = await matchingUsers.docs[0].data();
    req.user.userName = userData.userName;

    return next();
  } catch (err) {
    console.error("Error while veryfying token", err);
    return res.status(403).json(err);
  }
};
