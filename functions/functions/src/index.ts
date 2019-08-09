import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

const app = express();
app.use(cors());

import { login, signup, getUserDetails } from "./handlers/users";
import { postParagraph, deleteParagraph } from "./handlers/paragraphs";
import { FBAuth } from "./util/FBAuth";

app.post("/signup", signup);
app.post("/login", login);
app.get("/user/:userName", getUserDetails);

app.post("/paragraph", FBAuth, postParagraph);
app.delete("/paragraph/:pId", FBAuth, deleteParagraph);

exports.api = functions.https.onRequest(app);
